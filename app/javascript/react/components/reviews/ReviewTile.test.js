import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CapeTile from '../capes/CapeTile';
import ReviewTile from './ReviewTile'

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewTile', () => {
  let wrapper;
  let cape;

  beforeEach(() => {
    cape = {
      id: 1,
      name: 'Super Nick',
      intelligence: 99,
      strength: 5,
      speed: 40,
      url:
        'https://cdn.bulbagarden.net/upload/thumb/a/a6/Roxanne_Nosepass_Adventures.png/200px-Roxanne_Nosepass_Adventures.png'
    };

    wrapper = mount(
      <BrowserRouter>
        <CapeTile cape={cape} />
        <ReviewTile
            rating= {5}
            body= "Reviews our PRs too late"
            cape_id= {1}
            userName= "Joe Buck"
        />
      </BrowserRouter>
    );
  });

  it('should render an h4 tag with the name of the review', () => {
    expect(wrapper.find('#reviewer').text()).toBe('Reviewer Name: Joe Buck');
  });

  it('should render a h4 tag with the rating and review of the cape', () => {
    expect(wrapper.find('#review').text()).toBe('Rating: 5 | Review: Reviews our PRs too late');
  });
});
