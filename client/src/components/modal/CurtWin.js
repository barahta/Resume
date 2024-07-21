import React, {useEffect, useState} from "react";
import style from "./CurtWin.module.scss";
import {useMessage} from "../../hooks/message.hook";

export default function CurtWin({openmodal, setOpenmodal, thisgood, setThisgood, curt, setCurt}) {
    const [total, setTotal] = useState(1)
    const [mainimg, setMainimg] = useState(thisgood.img)
    const message = useMessage();
    function findByTitle(array, title) {
        return array.find(item => item.title === title);
    }
    function findIndexByTitle(array, title) {
        return array.findIndex(item => item.title === title);
    }

    const pullCart = () => {

        const newcart = [...curt]
        const titleToFind = thisgood.title;
        const foundItem = findByTitle(newcart, titleToFind);

        if(foundItem){
            const index = findIndexByTitle(newcart, titleToFind);
            newcart[index].cost = newcart[index].cost+total
            setCurt(newcart)
        } else {
            newcart.push({
                title: thisgood.title,
                cost: total,
                good: thisgood
            })
            setCurt(newcart)
        }
        message('Добавлено в корзину!')
    }
    const calcDrop = make => {
        if(make && total<thisgood.total){
            setTotal(total+1)
        }else if(!make && total!==0){
            setTotal(total-1)
        }
    }


    useEffect(()=>{
        setMainimg(thisgood.img)
    },[thisgood.img])
    return (
        <div className={style.curtwin} style={(openmodal && thisgood)?{display: 'flex'}:{display: 'none'}}>
            <div className={style.curtwin_main} onClick={()=>{setOpenmodal(!openmodal); setTotal(1)}}></div>
            <div className={style.curtwin_window}>
                <div className={style.curtwin_window_imgs}>
                    <div className={style.curtwin_window_imgs_scroll}>
                        {/*{thisgood.moreimg}*/}
                        {(thisgood)&&thisgood.moreimg.map((img, index)=>(
                            <div key={index} style={{backgroundImage: `url(${img})`}} className={style.img } onClick={()=>setMainimg(img)}>
                                <div className={style.fone }></div>
                            </div>
                        ))}

                    </div>
                    <div className={style.curtwin_window_imgs_selectimg} style={(thisgood)?{backgroundImage: `url(${mainimg})`}:{}}></div>
                </div>
                <div className={style.curtwin_window_info}>
                    <div className={style.curtwin_window_info_title}>{(thisgood)?thisgood.title:''}</div>
                    <div className={style.curtwin_window_info_description}>{(thisgood)?thisgood.description:''}</div>
                    <div className={style.curtwin_window_info_price}>{(thisgood)?thisgood.price:''} <i className="fa-solid fa-ruble-sign"/></div>
                    <div className={style.curtwin_window_info_total}>
                        <div className={style.curtwin_window_info_total_coster}>
                            <div className={style.curtwin_window_info_total_coster_minus} onClick={()=>calcDrop(false)} >-</div>
                            <div className={style.curtwin_window_info_total_coster_total}>{total}</div>
                            <div className={style.curtwin_window_info_total_coster_plus} onClick={()=>calcDrop(true)} >+</div>
                        </div>
                        <div className={style.curtwin_window_info_total_allcost}>TOTAL: {(thisgood)?total*thisgood.price:''},00 rub</div>
                    </div>
                    <div className={style.curtwin_window_info_curt} style={(total===0)?{backgroundColor:'#CCC'}:{}} onClick={()=>{if(total>0){pullCart()}}}>Купить</div>
                </div>
            </div>
            <div className={style.curtwin_krest} onClick={()=>{setOpenmodal(!openmodal); setTotal(1)}}><i className="fa-solid fa-xmark"/></div>
        </div>
    );
}