import { combineReducers } from 'redux';
import { filmsReducer as films } from './films';

const filmStore = combineReducers({
  films,
});

export default filmStore;
