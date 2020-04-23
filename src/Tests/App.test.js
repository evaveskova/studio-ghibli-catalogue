import React from 'react';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../App';

const mockStore = configureMockStore([thunk]);
const storeState = {
  films: [],
  sort: 'title',
  searchQuery: '',
};

let appComponent;
describe('App component renders correctly', () => {
  beforeEach(() => {
    const store = mockStore(storeState);
    appComponent = render(<Provider store={store}><App /></Provider>);
  });

  it('should render header', () => {
    const headerId = appComponent.find('header#header');
    expect(headerId.length).toBe(1);
  });

  it('should render main section', () => {
    const mainId = appComponent.find('section#main');
    expect(mainId.length).toBe(1);
  });

  it('should render footer', () => {
    const footerId = appComponent.find('footer#footer');
    expect(footerId.length).toBe(1);
  });
});
