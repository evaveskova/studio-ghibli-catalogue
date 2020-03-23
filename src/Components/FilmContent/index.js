import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';
import style from './style.module.css';

function FilmContent({ films, handleSortingChange, sort }) {
  const handleChange = event => {
    handleSortingChange(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.sorting}>
        Sort by:
        <select
          name="sortBy"
          id="sortBy"
          onChange={handleChange}
          className={style.dropdown}
        >
          <option selected={sort === 'title' ? 'selected' : ''} value="title">
            Title
          </option>
          <option
            selected={sort === 'rtScore' ? 'selected' : ''}
            value="rtScore"
          >
            Rating
          </option>
          <option
            selected={sort === 'releaseDateAsc' ? 'selected' : ''}
            value="releaseDateAsc"
          >
            Date: (oldest to newest)
          </option>
          <option
            selected={sort === 'releaseDateDesc' ? 'selected' : ''}
            value="releaseDateDesc"
          >
            Date: (newest to oldest)
          </option>
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
  sort: PropTypes.func.isRequired,
};


export default FilmContent;
