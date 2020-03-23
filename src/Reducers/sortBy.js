import { SORT_FILMS } from '../Actions';

const initialState = 'title';

export function sortingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SORT_FILMS:
      return payload;
    default:
      return state;
  }
}

export const getSort = state => state.sort;
