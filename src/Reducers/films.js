/* eslint-disable no-nested-ternary */
import { STORE_ALL_FILMS } from '../Actions';

const initialState = [];

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_ALL_FILMS:
      return action.payload;
    default:
      return state;
  }
}

function getSearchedFilm(state) {
  // eslint-disable-next-line max-len
  return state.films.filter(({ title }) => title.toLowerCase().includes(state.searchQuery.toLowerCase()));
}

export const getFilms = state => state.films;

const sortBy = (property, type) => {
  let sortOrder = 1;

  if (property[0] === '-') {
    sortOrder = -1;
    // eslint-disable-next-line no-param-reassign
    property = property.substr(1);
  }
  const parse = value => {
    if (['rt_score', 'release_date'].includes(property)) {
      return Number(value);
    }
    return value;
  };
  if (type === 'ASC') {
    return function ascending(a, b) {
      const result = parse(a[property]) < parse(b[property])
        ? -1
        : parse(a[property]) > parse(b[property])
          ? 1
          : 0;
      return result * sortOrder;
    };
  }
  if (type === 'DESC') {
    return function descending(a, b) {
      const result = parse(a[property]) < parse(b[property]) ? 1
        : parse(a[property]) > parse(b[property])
          ? -1
          : 0;
      return result * sortOrder;
    };
  }
  return false;
};

export const sortedFilms = state => {
  const { sort } = state;

  const filteredFilms = getSearchedFilm(state);

  switch (sort) {
    case 'title':
      return filteredFilms.sort(sortBy(sort, 'ASC'));
    case 'rtScore':
      return filteredFilms.sort(sortBy('rt_score', 'DESC'));
    case 'releaseDateAsc':
      return filteredFilms.sort(sortBy('release_date', 'ASC'));
    case 'releaseDateDesc':
      return filteredFilms.sort(sortBy('release_date', 'DESC'));
    default:
      return filteredFilms;
  }
};

export const getFilmByID = (id, state) => {
  const result = state.films.filter(item => item.id === id);
  return result[0];
};
