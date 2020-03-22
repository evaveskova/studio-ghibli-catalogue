import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const FilmDetails = ({ film }) => {
  const { title, poster } = film;
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
        <h2 className={style.h2}>{title}</h2>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.objectOf().isRequired,
  title: PropTypes.objectOf().isRequired,
  poster: PropTypes.objectOf().isRequired,
};

export default FilmDetails;
