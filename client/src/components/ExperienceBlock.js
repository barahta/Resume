import React, { useRef, useEffect, useState } from 'react';
import style from '../pages/styles/MainStyle.module.scss';

const ExperienceBlock = ({ block, postion }) => {
    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentBlock = blockRef.current;

        if (currentBlock) {
            observer.observe(currentBlock);
        }

        return () => {
            if (currentBlock) {
                observer.unobserve(currentBlock);
            }
        };
    }, []);

    return (
        <div ref={blockRef} className={`${style.experience_history__block} ${isVisible ? style.visible : ''}`} style={(postion === 'left')?{paddingLeft:'10px'}:{}}>
            <div className={style.experience_history__block_title}>{block.title}</div>
            {block.description.map((desc, index) => (
                <div key={index} className={style.experience_history__block_description}>{desc}</div>
            ))}
            <div className={style.experience_history__block_year}>{block.time}</div>
            <div className={style.experience_history__block_slash} style={(postion === 'left')?{left:'0px', marginLeft:'-40px'}:{}}></div>
        </div>
    );
};

export default ExperienceBlock;