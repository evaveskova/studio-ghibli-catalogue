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
    <Link to={link}>
      <div className={style.cardWrapper}>
        <img
          src={poster}
          alt={title}
          width="100%"
          height="320px"
          className={style.image}
        />
        <h2 className={style.h2}>
          {title}
          {' '}
          /
          {release_date}
          {' '}
          /
          {rt_score}
        </h2>
      </div>
    </Link>
  );
}

FilmCard.propTypes = {
  film: PropTypes.objectOf().isRequired,
};

export default FilmCard;
