import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar';
import { title, header } from '../../Assets/images';
import style from './style.module.css';

function Header() {
  return (
    <header
      className={style.header}
      style={{ background: `url(${header}) center no-repeat `, backgroundSize: 'cover' }}
    >
      <Link to="/">
        <img
          className={style.headerImg}
          src={title}
          alt="Studio Ghibli"
        />
      </Link>
      <div className={style.searchWrapper}>
        <Search />
      </div>
    </header>
  );
}

export default Header;
