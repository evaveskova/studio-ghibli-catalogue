import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilmByID } from '../../Reducers/films';
import getFilmsAction from '../../Services/FetchFilms';
import FilmDetails from '../../Components/FilmDetails';
import Loader from '../../Components/Loader';
import style from './style.module.css';

const Film = ({ film, getFilm }) => {
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <section className={style.section}>
      {film ? <FilmDetails film={film} /> : <Loader />}
    </section>
  );
};

const mapStateToProps = (state, { props }) => ({
  film: getFilmByID(props.match.params.id, state),
});

const mapDispatchToProps = (dispatch, { props }) => ({
  getFilm: getFilmsAction(dispatch, props.match.params.id),
});


Film.propTypes = {
  film: PropTypes.objectOf().isRequired,
  getFilm: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Film);
