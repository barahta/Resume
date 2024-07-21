import React, {useEffect, useState} from 'react';
import style from './styles/MainStyle.module.scss';
import './styles/hovers.scss';
import ExperienceBlock from '../components/ExperienceBlock';
import CurtWin from "../components/modal/CurtWin";
import Cart from "../components/modal/Cart";
import Order from "../components/modal/Order";
import {useMessage} from "../hooks/message.hook";
import {Link} from "react-router-dom";

export default function MainPage() {

    const [curt, setCurt] = useState([])
    const [curtopen, setCurtopen] = useState(false)
    const timeline = [
        {
            title: 'ООО Сургутское РСУ',
            description: ['Разработчик ПО'],
            time: '1 год'
        },
        {
            title: 'ООО Сургутское РСУ',
            description: ['Ведущий экономист'],
            time: '2 год'
        },
        {
            title: 'Банки',
            description: ['Привлечение', 'Ипотека', 'Фронт'],
            time: null
        },
        {
            title: 'ПАО СНГ',
            description: ['Оператор по добычи нефти и газа'],
            time: null
        },
    ]
    const goods = [
        {
            title: 'Кеды Nike Court Borough Mid 2 Bg',
            price: '2581',
            img: 'https://ir-2.ozone.ru/s3/multimedia-u/wc1000/6549535422.jpg',
            moreimg: [
                'https://ir-2.ozone.ru/s3/multimedia-u/wc1000/6549535422.jpg',
                'https://ir-2.ozone.ru/s3/multimedia-x/wc1000/6549535425.jpg',
                'https://ir-2.ozone.ru/s3/multimedia-m/wc1000/6549535306.jpg',
                'https://ir-2.ozone.ru/s3/multimedia-y/wc1000/6549535318.jpg',
                'https://ir-2.ozone.ru/s3/multimedia-q/wc1000/6549535346.jpg',
                'https://ir-2.ozone.ru/s3/multimedia-5/wc1000/6549535361.jpg',
                'https://ir-2.ozone.ru/s3/multimedia-h/wc1000/6549535373.jpg',
            ],
            description: 'Классические кроссовки Nike Court Borough Mid 2, выполненные из прочной кожи, придают им первоклассный вид и удобство. Накладка на язычке и лодыжке обеспечивает дополнительный комфорт.',

            total: 8
        },
        {
            title: 'Кеды Nike Court Borough Mid 2 (Gs)',
            price: '3040',
            img: 'https://ir-4.ozone.ru/s3/multimedia-1-z/wc1000/7003766159.jpg',
            moreimg: [
                'https://ir-4.ozone.ru/s3/multimedia-1-z/wc1000/7003766159.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-3/wc1000/7003766163.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-9/wc1000/7003766169.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-5/wc1000/7003766165.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-t/wc1000/7003766153.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-2/wc1000/7003766162.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-8/wc1000/7003766168.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-1/wc1000/7003766161.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-1-0/wc1000/7003766160.jpg',
            ],
            description: 'Классические кроссовки Nike Court Borough Mid 2, выполненные из прочной кожи, придают им первоклассный вид и удобство. Накладка на язычке и лодыжке обеспечивает дополнительный комфорт.',

            total: 5
        },
        {
            title: 'Кроссовки Nike Air Max Plus (Gs)',
            price: '8169',
            img: 'https://ir-4.ozone.ru/s3/multimedia-v/wc1000/6626440783.jpg',
            description: 'Nike Air Max Plus - это легендарная амортизация "Tuned" Air для дополнительного комфорта. При этом сохраняется оригинальное вдохновение: волнистые линии, напоминающие пальмовые листья, и хвост кита в нижней части.',
            moreimg: [
                'https://ir-4.ozone.ru/s3/multimedia-v/wc1000/6626440783.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-f/wc1000/6579006051.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-8/wc1000/6579006044.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-o/wc1000/6579006060.jpg',
                'https://ir-4.ozone.ru/s3/multimedia-7/wc1000/6579006079.jpg'
            ],
            total: 13
        }
    ]
    const [thisgood, setThisgood] = useState(goods[0])
    const [openmodal, setOpenmodal] = useState(false)
    const [openorder, setOpenorder] = useState(false)
    const [myorder, setMyorder] = useState([])
    const [mail, setMail] = useState('')
    const message = useMessage();
    function findByTitle(array, title) {
        return array.find(item => item.title === title);
    }
    function findIndexByTitle(array, title) {
        return array.findIndex(item => item.title === title);
    }
    const pullCart = good => {

        const newcart = [...curt]
        const titleToFind = good.title;
        const foundItem = findByTitle(curt, titleToFind);

        if(foundItem){
            const index = findIndexByTitle(curt, titleToFind);
            newcart[index].cost = newcart[index].cost+1
            setCurt(newcart)
        } else {
            newcart.push({
                title: good.title,
                cost: 1,
                good: good
            })
            setCurt(newcart)
        }
    }
    const sendMail = () => {
        if(mail.length>0){
            message('Ваше сообщение доставлено')
            setMail('')
        }else{
            message('Сообщение не доставлено из-за отсутсвия текста')
        }
    }
    useEffect(()=>{
        if(curt.length>0){
            setCurtopen(true)
        }else{
            setCurtopen(false)
        }

    },[])
    useEffect(()=>{
        console.log(curt)
    },[curt])

    return (
        <div className={style.container}>

            <div className={style.header}>
                <div className={style.header_logo}>iamwelcome.ru</div>
                <div className={style.header_menu}>
                    {/*<div className={style.header_menu_btn}>home</div>*/}
                    <a href='/#about' className={style.header_menu_btn}>about</a>
                    <a href='/#goods' className={style.header_menu_btn}>goods</a>
                    <a href='/#contacts' className={style.header_menu_btn}>contacts</a>
                </div>
            </div>
            <div className={style.mainup}>
                <div className={style.mainup_stack}>
                    <i className="fa-brands fa-html5 html5"/>
                    <i className="fa-brands fa-css3-alt css3"/>
                    <i className="fa-brands fa-sass sass"/>
                    <i className="fa-brands fa-node-js js"/>
                    <i className="fa-brands fa-react react"/>
                </div>
                <div className={style.mainup_vizitka}>
                    <div className={style.mainup_vizitka_left}>
                        <div className={style.mainup_vizitka_left_title}>FRONT-END REACT DEVELOPER</div>
                        <div className={style.mainup_vizitka_left_name}>I’m Vladimir Alekseevich Barakhtyansliy</div>
                        <div className={style.mainup_vizitka_left_hello}>
                            A passionate front-end developer
                            from Surgut, Russia,
                            looking to relocate to your city
                        </div>
                    </div>
                    <div className={style.mainup_vizitka_right}>
                        <div className={style.mainup_vizitka_right_photo}></div>
                        <div className={style.mainup_vizitka_right_mask}></div>
                    </div>
                </div>
            </div>
            <div className={style.reversesblocks}>
                <div className={style.revers_btn_age}>
                    <div className={style.card_front}>
                        Age
                    </div>
                    <div className={style.card_back}>
                        <div className={style.card_back_up}>
                            03.03.1993
                        </div>
                        <div className={style.card_back_center}></div>
                        <div className={style.card_back_bottom}>
                            31 years
                            old
                        </div>
                    </div>
                </div>
                <div className={style.revers_btn_level}>
                    <div className={style.card_front}>
                        Education
                        Level
                    </div>
                    <div className={style.card_back}>
                        Higher
                    </div>
                </div>
                <div className={style.revers_btn_position}>
                    <div className={style.card_front}>
                        Current Position
                    </div>
                    <div className={style.card_back}>
                        <div className={style.card_back_up}>
                            Soft
                            ware
                        </div>
                        <div className={style.card_back_center}></div>
                        <div className={style.card_back_bottom}>
                            Developer
                        </div>
                    </div>
                </div>
                <div className={style.revers_btn_contact}>
                    <div className={style.card_front}>
                        Contact
                    </div>
                    <div className={style.card_back}>
                        <div className={style.card_back_up}></div>
                        <div className={style.card_back_center}></div>
                        <div className={style.card_back_bottom}>
                            barahtasurgut
                            @gmail.com
                            +7(982)5527332
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.experience}>
                <div className={style.experience_title}>Work Experience</div>
                <div className={style.experience_history}>
                    <div className={style.experience_history_left}>
                        {timeline.map((block, index) => {
                            if (index % 2 !== 0) {
                                return <ExperienceBlock key={index} block={block} postion={'right'}/>;
                            } else {
                                return <div key={index} className={style.experience_history__block}></div>;
                            }
                        })}
                    </div>
                    <div className={style.experience_history_center}>
                        <div className={style.experience_history_center_now_sphere}>
                            <div className={style.experience_history_center_now_sphere_coma}></div>
                            <div className={style.experience_history_center_now_sphere_now}>Now...</div>
                        </div>
                        <div className={style.experience_history_center_line}></div>
                    </div>
                    <div className={style.experience_history_right}>
                        {timeline.map((block, index) => {
                            if (index % 2 === 0) {
                                return <ExperienceBlock key={index} block={block} postion={'left'}/>;
                            } else {
                                return <div key={index} className={style.experience_history__block}></div>;
                            }
                        })}
                    </div>
                </div>
                <div className={style.experience_run}><i className="fa-solid fa-person-running"/></div>
            </div>
            <div className={style.portfolio}></div>
            <div className={style.aboutme}></div>
            <div id='goods' className={style.grabform}>
                <div className={style.grabform_line}></div>
                <div className={style.grabform_title}>Offer</div>
                <div className={style.grabform_description}>
                    while I'm looking for a job, I can sell you my sneakers</div>
                <div className={style.grabform_goods}>
                    {goods.map((good, index)=>(
                        <div key={index} className={style.grabform_goods_block}>

                            <div className={style.grabform_goods_block_img}  style={{backgroundImage: `url(${good.img})` }}>
                                <div className={style.grabform_goods_block_open} onClick={()=>{setThisgood(good);setOpenmodal(!openmodal); }}><i className="fa-solid fa-eye"/></div>
                            </div>
                            <div className={style.grabform_goods_block_name}>{good.title}</div>
                            <div className={style.grabform_goods_block_price}>
                                <div className={style.grabform_goods_block_price_cost}>{good.price} <i className="fa-solid fa-ruble-sign"/></div>
                                <div className={style.grabform_goods_block_price_curt} onClick={()=>pullCart(good)}>
                                    <i className="fa-solid fa-cart-shopping"/>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
            <div id='about' className={style.grabform}>
                <div className={style.grabform_line}></div>
                <div className={style.grabform_title}>About me</div>
                <div className={style.grabform_description}>
                    Здравствуйте! Меня зовут Владимир, и я увлеченный и целеустремленный Front-end разработчик с опытом создания динамичных и отзывчивых веб-приложений. Я специализируюсь на разработке с использованием современных технологий, таких как React, JavaScript, HTML, и CSS. Я из Сургута, Россия, и готов к переезду. Я стремлюсь к тому, чтобы стать частью команды, которая ценит качество кода, инновации и командный дух. Я уверен, что мой опыт и навыки станут ценным вкладом в развитие вашей компании.
                    <div className={style.small}>

                        Hello! My name is Vladimir, and I am a passionate and driven Front-end developer with experience in creating dynamic and responsive web applications. I specialize in development using modern technologies such as React, JavaScript, HTML, and CSS. I am from Surgut, Russia, and I am ready to relocate. I strive to become part of a team that values code quality, innovation, and team spirit. I am confident that my experience and skills will make a valuable contribution to the growth of your company.



                    </div>
                </div>
                <br/><br/><br/><br/>

            </div>
            <div id='contacts' className={style.contact}>
                <div className={style.contact_left}>
                    <div className={style.contact_left_title}>Write me</div>
                    <input className={style.contact_left_input} value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    <div className={style.contact_left_btn} onClick={()=>sendMail()}>send</div>
                    <div className={style.contact_left_adress}><i className="fa-solid fa-envelope"/> Russia, KHMAO-Ugra, Surgut, Griboedova 4/2 fl.14</div>
                </div>
                <div className={style.contact_right}>
                    <div className={style.contact_right_title}>Contact</div>
                    <div className={style.contact_right_mail}>barahtasurgut@gmail.com<br/>+7 (982) 552 7 332</div>
                    <div className={style.contact_right_btns}>
                        <i className="fa-brands fa-vk"/>
                        <i className="fa-brands fa-telegram"/>
                        <i className="fa-brands fa-whatsapp"/>
                    </div>
                </div>
            </div>
            <CurtWin openmodal={openmodal} setOpenmodal={setOpenmodal} setThisgood={setThisgood} thisgood={thisgood} curt={curt} setCurt={setCurt}/>
            <Cart curt={curt} setCurt={setCurt} openmodal={openmodal} openorder={openorder} setOpenorder={setOpenorder} myorder={myorder} setMyorder={setMyorder}/>
            <Order openorder={openorder} setOpenorder={setOpenorder} myorder={myorder} setMyorder={setMyorder}/>
        </div>
    );
}
