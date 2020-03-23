import React from 'react';
import Search from '../SearchBar';
import style from './style.module.css';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.searchWrapper}>
        <Search />
      </div>
    </header>
  );
}

export default Header;
