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
        value={sort}
      >
        <option value="title">
          Title
        </option>
        <option
          value="rtScore"
        >
          Rating
        </option>
        <option
          value="releaseDateAsc"
        >
          Date: (oldest to newest)
        </option>
        <option
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
  sort: PropTypes.string.isRequired,
};

export default SortBy;
