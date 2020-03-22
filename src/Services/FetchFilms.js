import { storeAllFilms } from '../Actions';
import { getFilmById, getAllFilms } from './GhibliAPI';
import getImdbFilm from './ImdbAPI';

async function getPoster(film) {
  const name = film.title.replace(' ', '+');
  return getImdbFilm(name).then(response => {
    const poster = response.Poster;
    return { ...film, poster };
  });
}

async function fetchFilms(filmId) {
  const films = filmId === '' ? await getAllFilms() : [await getFilmById(filmId)];
  return Promise.all(
    films.map(item => getPoster(item).then(response => response)),
  );
}

const getFilms = (dispatch, filmId = '') => async () => {
  const result = await fetchFilms(filmId);
  dispatch(storeAllFilms(result));
};

export default getFilms;
