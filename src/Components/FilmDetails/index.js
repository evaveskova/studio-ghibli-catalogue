/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { backIcon } from '../../Assets/images';
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
    <div className={style.wrapper}>
      <Link to="/" className={style.link}>
        <img
          src={backIcon}
          className={style.backIcon}
          alt="Back Arrow"
          height="20vh"
        />Go back
      </Link>
      <div className={style.content}>
        <img
          src={poster}
          alt={title}
          className={style.image}
          id="poster"
        />

        <div className={style.details}>
          <h2 className={style.h2} id="title">{title}</h2>
          <p className={style.description}>{description}</p>
          <div className={style.notes}>
            <p id="director">Directed by {director}</p>
            <p>Produced by {producer}</p>
            <p>Released {release_date}</p>
            <p className={style.rating}>
              <img
                src="https://img.icons8.com/dusk/64/000000/tomato.png"
                alt="tomato icon"
                width="35vw"
                height="35vh"
                className={style.icon}
              /><span> {rt_score}/100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    release_date: PropTypes.string,
    rt_score: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default FilmDetails;
