/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const FilmDetails = ({ film }) => {
  const {
    title,
    poster,
    description,
    producer,
    director,
    rt_score,
    release_date,
  } = film;
  return (
    <div className={style.content}>
      <div className={style.cardWrapper}>
        <img
          src={poster}
          alt={title}
          width="100%"
          height="480px"
          className={style.image}
        />

      </div>
      <div className={style.details}>
        <h2 className={style.h2}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.notes}>
          <p>Directed by {director}</p>
          <p>Produced by {producer}</p>
          <p>Released {release_date}</p>
          <p>
            <img
              src="https://img.icons8.com/dusk/64/000000/tomato.png"
              alt="tomato icon"
              width="35vw"
              height="35vh"
              className={style.icon}
            />   {rt_score}/100
          </p>
        </div>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.objectOf().isRequired,
};

export default FilmDetails;
