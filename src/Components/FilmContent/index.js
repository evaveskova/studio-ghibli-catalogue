import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';
import style from './style.module.css';

function FilmContent({ films, handleSortingChange }) {
  const handleChange = event => {
    handleSortingChange(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.sorting}>
        Sort by:
        <select name="sortBy" id="sortBy" onChange={handleChange}>
          <option value="title">Title</option>
          <option value="rtScore">Rating</option>
          <option value="releaseDateAsc">Date (oldest to newest)</option>
          <option value="releaseDateDesc">Date (newest to oldest)</option>
        </select>
      </div>
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
  handleSortingChange: PropTypes.func.isRequired,
};


export default FilmContent;
