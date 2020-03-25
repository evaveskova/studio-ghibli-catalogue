import React from 'react';
import style from './style.module.css';
// Loader design by https://codepen.io/ilithya/pen/WdJLPY

function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.bubble}>
        <div className={[style.bubbleShine, style.bubbleShineLg].join(' ')} />
        <div className={[style.bubbleShine, style.bubbleShineSm].join(' ')} />
      </div>
      <p className={style.text}>
        Lo
        <span className={style.textHighlight}>a</span>
        din
        <span className={style.textHighlight}>g</span>
      </p>
    </div>
  );
}

export default Loader;
