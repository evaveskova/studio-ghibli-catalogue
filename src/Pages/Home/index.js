import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortedFilms } from '../../Reducers/films';
import { sortFilms } from '../../Actions';
import getFilmsAction from '../../Services/FetchFilms';
import FilmContent from '../../Components/FilmContent';

const Home = ({ films, getFilms, sortFilms }) => {
  useEffect(() => {
    getFilms();
  }, []);

  const handleSortingChange = sorting => {
    sortFilms(sorting);
  };
  return (
    <section>
      <FilmContent films={films} handleSortingChange={handleSortingChange} />
    </section>
  );
};

const mapStateToProps = state => (
  {
    films: sortedFilms(state),
    sort: state.sort,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getFilms: getFilmsAction(dispatch),
    sortFilms: sorting => dispatch(sortFilms(sorting)),
  }
);

Home.propTypes = {
  films: PropTypes.arrayOf().isRequired,
  getFilms: PropTypes.func.isRequired,
  sortFilms: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
