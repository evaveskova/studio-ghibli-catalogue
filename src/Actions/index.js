export const STORE_ALL_FILMS = 'STORE_ALL_FILMS';
export const SORT_FILMS = 'SORT_FILMS';

export function storeAllFilms(films) {
  return {
    type: STORE_ALL_FILMS,
    payload: films,
  };
}

export function sortFilms(sort) {
  return {
    type: SORT_FILMS,
    payload: sort,
  };
}
