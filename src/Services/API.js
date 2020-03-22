const URL = 'https://ghibliapi.herokuapp.com';

export default async function getFilms() {
  const url = `${URL}/films`;
  return fetch(url).then(response => response.json());
}
