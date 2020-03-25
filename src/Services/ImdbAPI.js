const URL = 'https://www.omdbapi.com/';

export default async function getImdbFilm(name) {
  const url = `${URL}?t=${name}&apikey=1bb17a09`;
  return fetch(url).then(response => response.json());
}
