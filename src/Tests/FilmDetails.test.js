import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import FilmDetails from '../Components/FilmDetails';

let filmDetailsComponent;
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
describe('filmDetailsComponent component renders correctly', () => {
  beforeEach(() => {
    filmDetailsComponent = render(
      <Router><FilmDetails film={film} /></Router>,
    );
  });

  it('should render title properly', () => {
    const title = filmDetailsComponent.find('h2#title');
    expect(title.text()).toEqual(film.title);
  });

  it('should render image', () => {
    const poster = filmDetailsComponent.find('img#poster');
    expect(poster.attr('src')).toEqual(film.poster);
  });

  it('should render director', () => {
    const director = filmDetailsComponent.find('p#director');
    expect(director.text()).toEqual(`Directed by ${film.director}`);
  });
});
