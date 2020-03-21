export const STORE_ALL_FILMS = 'STORE_ALL_FILMS';

export function storeAllFilms(films) {
  return {
    type: STORE_ALL_FILMS,
    payload: films,
  };
}
