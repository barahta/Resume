import {useState,useContext} from "react";
import style from './styles/MainStyle.module.scss'
import './styles/hovers.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function MainPage(){

    const actionIcon = (icon) => {
       return (icon)?true:false
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.header_logo}>iamwelcome.ru</div>
                <div className={style.header_menu}>
                    <div className={style.header_menu_btn}>home</div>
                    <div className={style.header_menu_btn}>about</div>
                    <div className={style.header_menu_btn}>projects</div>
                    <div className={style.header_menu_btn}>contact</div>
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
                <div className={style.revers_btn_age}>Age</div>
                <div className={style.revers_btn_level}>Educa
                    tion
                    Level</div>
                <div className={style.revers_btn_position}>Current Position</div>
                <div className={style.revers_btn_contact}>Contact</div>
            </div>
            <div className={style.experience}>
                <div className={style.experience_title}>Work Experience</div>
                <div className={style.experience_history}>
                    <div className={style.experience_history_left}></div>
                    <div className={style.experience_history_center}></div>
                    <div className={style.experience_history_right}></div>
                </div>
            </div>
            <div className={style.portfolio}></div>
            <div className={style.aboutme}></div>
            <div className={style.grabform}></div>
            <div className={style.contact}></div>
        </div>
    );
};
