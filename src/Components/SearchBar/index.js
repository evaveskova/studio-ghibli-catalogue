import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchQuery } from '../../Actions';
import style from './style.module.css';

const Search = ({ searchQueryProp }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchInput = e.target.elements.search.value;
    searchQueryProp(searchInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input name="search" type="text" placeholder="Find a Movie" className={style.search} />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    searchQueryProp: search => dispatch(searchQuery(search)),
  }
);

Search.propTypes = {
  searchQueryProp: PropTypes.func.isRequired,
};

export default connect('', mapDispatchToProps)(Search);
