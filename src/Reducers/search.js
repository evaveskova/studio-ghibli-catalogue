import { SEARCH_QUERY } from '../Actions';

const initialState = '';

export function searchReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_QUERY:
      return payload;
    default:
      return state;
  }
}

export const getSearch = state => state.searchQuery;
