import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortedFilms } from '../../Reducers/films';
import { sortFilms } from '../../Actions';
import getFilmsAction from '../../Services/FetchFilms';
import FilmContent from '../../Components/FilmContent';

const Home = ({
  films, getFilms, sortFilms, sort,
}) => {
  useEffect(() => {
    getFilms();
  }, []);

  const handleSortingChange = sorting => {
    sortFilms(sorting);
  };
  return (
    <section style={{ marginTop: '-5rem' }}>
      <FilmContent films={films} handleSortingChange={handleSortingChange} sort={sort} />
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
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    release_date: PropTypes.string,
    rt_score: PropTypes.string,
  })).isRequired,
  getFilms: PropTypes.func.isRequired,
  sortFilms: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
