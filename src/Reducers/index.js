import { combineReducers } from 'redux';
import { filmsReducer as films } from './films';
import { sortingReducer as sort } from './sortBy';
import { searchReducer as searchQuery } from './search';


const filmStore = combineReducers({
  films,
  sort,
  searchQuery,
});

export default filmStore;
