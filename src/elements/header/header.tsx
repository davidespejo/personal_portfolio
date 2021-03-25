import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu';

export default function Header() {
    return (
        <header className='header'>
            <Link to={'/'} className='header__logo'>
                David Espejo
            </Link>
            <Menu />
        </header>
    );
}
