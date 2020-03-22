import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';
import style from './style.module.css';

function FilmContent({ films }) {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {films
          ? films.map(film => <FilmCard key={film.id} film={film} />)
          : null}
      </div>
    </div>
  );
}

FilmContent.propTypes = {
  films: PropTypes.arrayOf().isRequired,
};


export default FilmContent;
