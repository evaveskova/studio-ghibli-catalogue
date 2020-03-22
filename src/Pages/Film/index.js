import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilmByID } from '../../Reducers/films';
import getFilmsAction from '../../Services/FetchFilms';
import FilmDetails from '../../Components/FilmDetails';

const Film = ({ film, getFilm }) => {
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <section>
      {film ? <FilmDetails film={film} /> : ''}
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
