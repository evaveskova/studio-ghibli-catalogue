import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';
import SortBy from '../SortBy';
import Loader from '../Loader';
import style from './style.module.css';

function FilmContent({ films, handleSortingChange, sort }) {
  const handleChange = event => {
    handleSortingChange(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <SortBy sort={sort} handleChange={handleChange} />
      {films.length
        ? (
          <div className={style.content}>
            {films.map(film => <FilmCard key={film.id} film={film} />)}
          </div>
        )
        : <Loader />}
    </div>
  );
}

FilmContent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    release_date: PropTypes.string,
    rt_score: PropTypes.string,
  })).isRequired,
  handleSortingChange: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};


export default FilmContent;
