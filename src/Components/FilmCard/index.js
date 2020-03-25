/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style.module.css';

function FilmCard({ film }) {
  const {
    title, poster, id, rt_score, release_date,
  } = film;
  const link = `/film/${id}`;
  return (
    <Link to={link} className={style.wrapper}>
      <div className={style.cardWrapper}>
        <img
          src={poster}
          alt={title}
          className={style.image}
        />
        <h2 className={style.h2}>
          {title}
        </h2>
        <h3>
          {release_date}
          {'    '}
          {rt_score}
          /100
        </h3>


      </div>
    </Link>
  );
}

FilmCard.propTypes = {
  film: PropTypes.objectOf().isRequired,
};

export default FilmCard;
