import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilms } from '../../Reducers/films';
import fetchFilms from '../../Services/FetchFilms';
import FilmContent from '../../Components/FilmContent';

const Home = ({ films, fetchFilms }) => {
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <section>
      <FilmContent films={films} />
    </section>
  );
};

const mapStateToProps = state => (
  {
    films: getFilms(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchFilms: fetchFilms(dispatch),
  }
);

Home.propTypes = {
  films: PropTypes.arrayOf().isRequired,
  fetchFilms: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
