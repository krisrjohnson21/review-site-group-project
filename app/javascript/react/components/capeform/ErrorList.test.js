import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorList from './ErrorList';

Enzyme.configure({ adapter: new Adapter() });

describe('ErrorList', () => {
  let wrapper;
  let errors;

  beforeEach(() => {
    errors = { field: 'is blank' };
    wrapper = mount(
      <BrowserRouter>
        <ErrorList errors={errors} />
      </BrowserRouter>
    );
  });

  it('should render an ul tag with the error message', () => {
    expect(wrapper.find('ul').text()).toBe('Field is blank');
  });
});
