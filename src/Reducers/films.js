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

export const getFilms = state => state.films;

const sortBy = (property, type) => {
  let sortOrder = 1;

  if (property[0] === '-') {
    sortOrder = -1;
    // eslint-disable-next-line no-param-reassign
    property = property.substr(1);
  }
  const parse = value => {
    if (['rt_score'].includes(property)) {
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
  return function desending(a, b) {
    const result = parse(a[property]) < parse(b[property]) ? 1
      : parse(a[property]) > parse(b[property])
        ? -1
        : 0;
    return result * sortOrder;
  };
};

export const sortedFilms = state => {
  const { films, sort } = state;

  switch (sort) {
    case 'title':
      return films.sort(sortBy(sort, 'ASC'));
    case 'rtScore':
      return films.sort(sortBy('rt_score', 'DESC'));
    case 'releaseDateAsc':
      return films.sort(sortBy('release_date', 'ASC'));
    case 'releaseDateDesc':
      return films.sort(sortBy('release_date', 'DESC'));
    default:
      return films;
  }
};

export const getFilmByID = (id, state) => {
  const result = state.films.filter(item => item.id === id);
  return result[0];
};
