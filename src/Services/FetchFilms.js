import { storeAllFilms } from '../Actions';
import { getFilmById, getAllFilms } from './GhibliAPI';
import getImdbFilm from './ImdbAPI';

async function getPoster(film) {
  const name = film.title.replace(' ', '+');
  const response = await getImdbFilm(name);
  return {
    poster: response.Poster,
  };
}

async function fetchFilms(filmId) {
  const films = filmId === '' ? await getAllFilms() : [await getFilmById(filmId)];
  return Promise.all(
    films.map(film => getPoster(film).then(response => ({ ...film, poster: response.poster }))),
  );
}

const getFilms = (dispatch, filmId = '') => async () => {
  const result = await fetchFilms(filmId);
  dispatch(storeAllFilms(result));
};

export default getFilms;
