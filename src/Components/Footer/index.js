import React from 'react';
import style from './style.module.css';
import { radish } from '../../Assets/images';

const Footer = () => (
  <div className={style.footerWrapper}>
    <img
      src={radish}
      alt="Radish Spirit"
      className={style.footerImg}
      height="70vh"
    />
    <div className={style.footerText}>
      <p>
        Built by
        <a href="https://github.com/evaveskova">Eva Veskova Jackson</a>
        .
      </p>
      <p>
        For more information on Studio Ghibli, visit their
        <a href="http://www.ghibli.jp/">official website</a>
        .
      </p>
    </div>
  </div>
);

export default Footer;
