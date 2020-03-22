const URL = 'https://ghibliapi.herokuapp.com';

export async function getAllFilms() {
  const url = `${URL}/films`;
  return fetch(url).then(response => response.json());
}

export async function getFilmById(id) {
  const url = `${URL}/films/${id}`;
  return fetch(url).then(response => response.json());
}
