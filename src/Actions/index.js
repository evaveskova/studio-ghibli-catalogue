export const STORE_ALL_FILMS = 'STORE_ALL_FILMS';
export const SORT_FILMS = 'SORT_FILMS';
export const SEARCH_QUERY = 'SEARCH_QUERY';

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

export function searchQuery(searchQuery) {
  return {
    type: SEARCH_QUERY,
    payload: searchQuery,
  };
}
