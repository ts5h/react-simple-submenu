// Header Test
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Component for test
import Header from '../components/Header';

// Configure
Enzyme.configure({ adapter: new Adapter() });


/* test */

// Check exists Submenu component
describe('Header', () => {
  test('Exists Submenu module', () => {
    const wrapper = shallow(<Header/>);
    
    expect(wrapper.find('Submenu').length).toBe(1);
  });
});



