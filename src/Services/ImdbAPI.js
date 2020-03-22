const URL = 'http://www.omdbapi.com/';
// const API_KEY = '1bb17a09';

export default async function getImdbFilm(name) {
  const url = `${URL}?t=${name}&apikey=1bb17a09`;
  return fetch(url).then(response => response.json());
}
