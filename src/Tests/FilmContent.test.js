import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import FilmContent from '../Components/FilmContent';

let filmContentComponent;
describe('FilmContent component renders correctly', () => {
  beforeEach(() => {
    const films = [{
      id: '123',
      title: 'Castle In The Sky',
      description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa.',
      director: 'Hayao Miyazaki',
      producer: 'Isao Takahata',
      release_date: '1986',
      rt_score: '95',
      url: 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
      poster: 'https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg'
    }];
    filmContentComponent = render(
      <Router><FilmContent films={films} handleSortingChange={() => {}} sort="title" /></Router>,
    );
  });

  it('should render content wrapper', () => {
    const contentId = filmContentComponent.find('div#content');
    expect(contentId.length).toBe(1);
  });

  it('should render sortBy component', () => {
    const sortById = filmContentComponent.find('select#sortBy');
    expect(sortById.length).toBe(1);
  });
});
