import { storeAllFilms } from '../Actions';
import getFilms from './API';

function fetchFilms(dispatch) {
  return () => {
    getFilms().then(response => dispatch(storeAllFilms(response)));
  };
}

export default fetchFilms;
