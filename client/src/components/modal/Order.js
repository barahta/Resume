import React, {useEffect, useState} from "react";
import style from "./CurtWin.module.scss";
import {useMessage} from "../../hooks/message.hook";

export default function Order({openorder, setOpenorder, myorder, setMyorder}) {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [sum, setSum] = useState(0)
    const message = useMessage();

    const totalSum = () => {
        let newsum = 0
        myorder.map(good=>{
            newsum = newsum + (good.cost * good.good.price)
        })
        setSum(newsum)
    }

    const makeOrder = () => {
        message(name+ ', Ваш заказ оформлен, ожидайте звонка')
        setMyorder([])
        setOpenorder(!openorder)
    }

    useEffect(()=>{
        totalSum()
        console.log(myorder)
    },[myorder])
    return (
        <div className={style.curtwin} style={(openorder)?{display: 'flex'}:{display: 'none'}}>
            <div className={style.curtwin_main} onClick={()=>setOpenorder(!openorder)}></div>
            <div className={style.curtwin_window}>
                <div className={style.centrum}>
                    <div className={style.order}>Your order totals: {sum}</div>
                    <input placeholder='Ваше имя' className={style.inputs} value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input placeholder='Ваш номер телефона' type="number" className={style.inputs} value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    <div className={style.orderbtn} onClick={()=>makeOrder()}>order</div>
                </div>

            </div>
            <div className={style.curtwin_krest} onClick={()=>setOpenorder(!openorder)}><i className="fa-solid fa-xmark"/></div>
        </div>
    );
}