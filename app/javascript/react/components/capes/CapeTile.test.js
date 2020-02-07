import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CapeTile from './CapeTile';

Enzyme.configure({ adapter: new Adapter() });

describe('CapeTile', () => {
  let wrapper;
  let cape;

  beforeEach(() => {
    cape = {
      name: 'Super Nick',
      intelligence: 99,
      strength: 5,
      speed: 40,
      url:
        'https://cdn.bulbagarden.net/upload/thumb/a/a6/Roxanne_Nosepass_Adventures.png/200px-Roxanne_Nosepass_Adventures.png',
      durability: 4,
      power: 8,
      combat: 3,
    };
    wrapper = mount(
      <BrowserRouter>
        <CapeTile cape={cape} />
      </BrowserRouter>
    );
  });

  it('should render an h1 tag with the name of the cape', () => {
    expect(wrapper.find('#name').text()).toBe('Super Nick');
  });

  it('should render an img tag with the url of the cape', () => {
    expect(wrapper.find('img').props()['src']).toBe(
      'https://cdn.bulbagarden.net/upload/thumb/a/a6/Roxanne_Nosepass_Adventures.png/200px-Roxanne_Nosepass_Adventures.png'
    );
  });
});
