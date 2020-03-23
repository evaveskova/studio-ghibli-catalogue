import { combineReducers } from 'redux';
import { filmsReducer as films } from './films';
import { sortingReducer as sort } from './sortBy';

const filmStore = combineReducers({
  films,
  sort,
});

export default filmStore;
