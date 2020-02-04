import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CapeShow from './CapeShow';
Enzyme.configure({ adapter: new Adapter() });

describe('CapeShow', () => {
  let wrapper;
  let capeData;

  beforeEach(() => {
    capeData = {
      name: 'Nedzilla',
      fullName: 'Debbie Lehman',
      gender: 'Male',
      affiliation: 'Starbucks Galactica',
      intelligence: 100,
      strength: 77,
      speed: 89,
      url:
        'https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg'
    };

    wrapper = mount(
      <BrowserRouter>
        <CapeShow capeData={capeData} />
      </BrowserRouter>
    );
  });

  it('should render an img tag with the url of the cape', () => {
    expect(wrapper.find('img').props()['src']).toBe(
      'https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/little_debbie.jpg'
    );
  });

  it('should render an h1 tag with the name of the cape', () => {
    expect(wrapper.find('h1').text()).toBe('Nedzilla');
  });

  it('should render an h4 tag with the full name of the cape', () => {
    expect(wrapper.find('#full-name').text()).toBe('Debbie Lehman');
  });

  it('should render an h4 tag with the gender of the cape', () => {
    expect(wrapper.find('#gender').text()).toBe('Gender: Male');
  });

  it('should render an h4 tag with the affiliation of the cape', () => {
    expect(wrapper.find('#affiliation').text()).toBe(
      'Affiliation: Starbucks Galactica'
    );
  });

  it('should render an h4 tag with the intelligence of the cape', () => {
    expect(wrapper.find('#intelligence').text()).toBe('100');
  });

  it('should render an h4 tag with the strength of the cape', () => {
    expect(wrapper.find('#strength').text()).toBe('77');
  });

  it('should render an h4 tag with the speed of the cape', () => {
    expect(wrapper.find('#speed').text()).toBe('89');
  });
});
