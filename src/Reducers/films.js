import { STORE_ALL_FILMS } from '../Actions';

const initialState = {
  films: [],
};

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_ALL_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
}

export const getFilms = state => state.films;
