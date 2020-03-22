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

export const getFilmByID = (id, state) => {
  const result = state.films.filter(item => item.id === id);
  return result[0];
};
