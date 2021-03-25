import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ColorManager from '../../utils/colors/color.manager';
import Slide from './slide';

import './slides.scss';

export default function Slides() {
    const [ activeSlide, setActiveSlide ] = useState<number>(0);

    const slides = [
        {
            ref: React.useRef(null),
            color: 'black',
        },
        {
            ref: React.useRef(null),
            color: 'ruby',
        },
        {
            ref: React.useRef(null),
            color: 'neon-blue',
        },
        {
            ref: React.useRef(null),
            color: 'emerald',
        },
    ];

    const changeSlide = (offSet: number) => {
        let newActiveSlide = activeSlide + offSet;

        if (newActiveSlide >= slides.length) {
            newActiveSlide = slides.length - 1;
        } else if (newActiveSlide < 0) {
            newActiveSlide = 0;
        }

        setActiveSlide(newActiveSlide);
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key == 'ArrowUp') {
            changeSlide(-1);
        } else if (event.key == 'ArrowDown') {
            changeSlide(1);
        }
    };

    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    });

    return (
        <div className='slides'>
            {slides.map((slide, key) => {
                return (
                    <CSSTransition in={activeSlide == key} nodeRef={slide.ref} key={key} timeout={3000}>
                        <Slide
                            ref={slide.ref}
                            backgroundColor={ColorManager.getColor(slide.color)}
                            key={`slides-${key}`}
                        />
                    </CSSTransition>
                );
            })}
        </div>
    );
}
