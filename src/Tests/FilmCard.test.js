import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import FilmCard from '../Components/FilmCard';

let filmCardComponent;
const film = {
  id: '123',
  title: 'Castle In The Sky',
  description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa.',
  director: 'Hayao Miyazaki',
  producer: 'Isao Takahata',
  release_date: '1986',
  rt_score: '95',
  url: 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
  poster: 'https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg',
};
describe('FilmCard component renders correctly', () => {
  beforeEach(() => {
    filmCardComponent = render(
      <Router><FilmCard film={film} /></Router>,
    );
  });

  it('should render title properly', () => {
    const title = filmCardComponent.find('h2#title');
    expect(title.text()).toEqual(film.title);
  });

  it('should render image', () => {
    const poster = filmCardComponent.find('img#poster');
    expect(poster.attr('src')).toEqual(film.poster);
  });
});
