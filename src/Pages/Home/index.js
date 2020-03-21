import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilms } from '../../Reducers/films';
import fetchFilms from '../../Services/FetchFilms';
// import style from './style.module.css';

const Home = ({ films, fetchFilms }) => {
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <section>
      <pre>
        {JSON.stringify(films, null, 2)}
      </pre>
    </section>
  );
};

Home.propTypes = {
  films: PropTypes.arrayOf().isRequired,
  fetchFilms: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
