// Header Test
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component for test
import Submenu from '../components/Submenu';
import Styles from '../scss/modules/Header.module.scss';

// Configure
Enzyme.configure({ adapter: new Adapter() });


/* test */
test('this.state.menu1 refracts class', () => {
  const submenu = mount(<Submenu/>).instance();
  submenu.setSubmenu();
  
  // need to onmouse
});




