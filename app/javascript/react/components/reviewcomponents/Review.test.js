import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Review from './Review';

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Review
        id={1}
        fullName={'Joe Buck'}
        body={'Reviews our PRs too late'}
        rating={5}
      />
    );
  });

  it('should render an h4 tag with the name of the review', () => {
    expect(wrapper.find('#reviewer').text()).toBe('Reviewer Name: Joe Buck');
  });

  it('should render a h4 tag with the rating and review of the cape', () => {
    expect(wrapper.find('#review').text()).toBe(
      'Rating: 5 | Review: Reviews our PRs too late'
    );
  });
});
