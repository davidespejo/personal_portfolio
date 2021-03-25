import React, { useEffect } from 'react';
import ColorManager from '../../utils/colors/color.manager';
import Triangle from './triangle';

import Particles from 'react-tsparticles';

import config from './config.json';

import './triangles.scss';

export default function Triangles() {
    const triangles = [
        {
            color: 'black',
        },
        {
            color: 'ruby',
        },
        {
            color: 'neon-blue',
        },
        {
            color: 'emerald',
        },
    ];

    const particlesInit = () => {
        console.log('Particles Init');
    };
    const particlesLoaded = () => {
        console.log('Particles Loaded');
    };

    return (
        <div className='triangles-container'>
            <Particles
                className='triangles triangles--bottom-left'
                id='tsparticles1'
                init={particlesInit}
                loaded={particlesLoaded}
                options={config}
            />
            <Particles
                className='triangles triangles--top-right'
                id='tsparticles2'
                init={particlesInit}
                loaded={particlesLoaded}
                options={config}
            />
            {/* {triangles.map((triangle) => <Triangle color={ColorManager.getColor(triangle.color)} />)} */}
        </div>
    );
}
