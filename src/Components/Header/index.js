import React from 'react';
import Search from '../SearchBar';
import { title } from '../../Assets/images';
import style from './style.module.css';

function Header() {
  return (
    <header className={style.header}>
      <img
        className={style.headerImg}
        src={title}
        alt="Studio Ghibli"
        height="150vh"
        width="30%"
      />
      <div className={style.searchWrapper}>
        <Search />
      </div>
    </header>
  );
}

export default Header;
