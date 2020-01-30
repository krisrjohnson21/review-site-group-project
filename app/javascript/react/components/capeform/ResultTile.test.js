import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultTile from './ResultTile';

Enzyme.configure({ adapter: new Adapter() });

describe('ResultTile', () => {
  let wrapper;
  let info;
  let onClickMock;

  beforeEach(() => {
    onClickMock = jest.fn()
    info = {name: "Batman"}
    wrapper = mount(
      <BrowserRouter>
        <ResultTile info={info} checkHero={onClickMock}/>
      </BrowserRouter>
    );
  });

  it('should render an li tag with the name of the cape', () => {
    expect(wrapper.find('li').text()).toBe('Batman');
  });

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });


});
