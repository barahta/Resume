import React from 'react';
import style from './styles/MainStyle.module.scss';
import './styles/hovers.scss';
import ExperienceBlock from '../components/ExperienceBlock';

export default function MainPage() {
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
    ];

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
            <div className={style.grabform}></div>
            <div className={style.contact}></div>
        </div>
    );
}
