import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

function SortBy({ sort, handleChange }) {
  return (
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
  );
}

SortBy.propTypes = {
  handleChange: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

export default SortBy;
