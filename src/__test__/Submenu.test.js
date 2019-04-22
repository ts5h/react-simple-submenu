// Header Test
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component for test
import Submenu from '../components/Submenu';

// Configure
Enzyme.configure({ adapter: new Adapter() });


/* test */
describe('Submenu', () => {
  
  const component = mount(<Submenu/>);
  const spy = jest.spyOn(component.instance(), 'setSubmenu');
  
  
  // called setSubmenu
  test('Should call setSubmenu() on componentDidMount', () => {
    component.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  
  test('Should call setSubmenu() on window resize event', () => {
    window.addEventListener('resize', spy);
    window.dispatchEvent(new Event('resize'));
    
    expect(spy).toHaveBeenCalled();
  });
  
  
  // onMouseOver
  test('State menu1 / menu2 reflect to ul.sub', () => {
    
    component.setState({
      menu1: false,
      menu2: false,
    });
    
    //console.log(component.find('ul').first().children().find('ul.show').length);
    const ulMain = component.find('ul');
    const ulSub = ulMain.children().find('ul.show');
    
    expect(ulSub).toHaveLength(0);
  });
  
  
  // onMouseOut
  test('State menu1 / menu2 reflect to ul.sub', () => {
    
    component.setState({
      menu1: true,
      menu2: true,
    });
    
    const ulMain = component.find('ul');
    const ulSub = ulMain.children().find('ul.show');
    
    expect(ulSub).toHaveLength(2);
  });
});




