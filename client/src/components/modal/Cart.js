import React, {useEffect, useState} from "react";
import style from "./CurtWin.module.scss";
import {useMessage} from "../../hooks/message.hook";

export default function Cart({curt, setCurt,openmodal, openorder, setOpenorder, myorder, setMyorder}) {
    const [totalsum, setTotalsum] = useState(0)
    const [collapse, setCollapse] = useState(false)
    const message = useMessage();
    const sumCart = () => {
        let summer = 0
        curt.map(good => {
            summer = summer + (good.cost * good.good.price)
        })
        setTotalsum(summer)
    }
    function findIndexByTitle(array, title) {
        return array.findIndex(item => item.title === title);
    }
    const delGood = good => {
        const newcart = [...curt]
        const titleToFind = good.title;
        const index = findIndexByTitle(curt, titleToFind);
        newcart.splice(index, 1)
        setCurt(newcart)
    }

    const orderCart = () => {
        const newcart = [...curt]
        // setCollapse(true)
        setOpenorder(true)
        setMyorder(newcart)
        setTimeout(()=>{
            setCurt([])
        },100)

    }


    useEffect(()=>{
        console.log(curt.length)
        sumCart()
    },[curt])
    return (
        <div className={style.curtboard} style={(curt.length>0 && !openmodal)?{display: 'flex'}:{}}>
            <div className={style.curtboard_close} onClick={()=>setCollapse(!collapse)}><i className={(collapse)?'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'}/></div>

            <div className={style.curtboard_title} >My cart = {totalsum},00 <i className="fa-solid fa-ruble-sign"/></div>
            <div className={style.curtboard_goods} style={(collapse)?{display:'none'}:{display:'flex'}}>
                {curt.map((good,index)=>(
                    <div key={index} className={style.curtboard_goods_block} >
                        <div className={style.curtboard_goods_block_img} style={{backgroundImage: `url(${good.good.img})`}}></div>
                        <div className={style.info} >
                            <div className={style.title} >{good.title}</div>
                            <div className={style.curtboard_goods_block_calc} >
                                <div className={style.curtboard_goods_block_calc_el} >
                                    <div className={style.curtboard_goods_block_calc_el_minus} >-</div>
                                    <div className={style.curtboard_goods_block_calc_el_total} >{good.cost}</div>
                                    <div className={style.curtboard_goods_block_calc_el_plus} >+</div>
                                </div>
                                <div className={style.curtboard_goods_block_calc_sum} >{good.cost * good.good.price} <i className="fa-solid fa-ruble-sign"/></div>
                                <div className={style.curtboard_goods_block_calc_del} onClick={()=>delGood(good)}>Удалить</div>
                            </div>
                        </div>


                    </div>
                ))}

            </div>
            <div className={style.curtboard_total} ></div>
            <div className={style.curtboard_btn} onClick={()=>orderCart()}>Оформить</div>
        </div>
    );
}