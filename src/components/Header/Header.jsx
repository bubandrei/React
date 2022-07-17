import s from './Header.module.css';
import React from 'react';

const Header = () => {
    return (
        <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png'></img>
      </header>
    )
}
export default Header