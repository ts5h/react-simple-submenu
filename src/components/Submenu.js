import React, { Component } from 'react';
import Styles from '../scss/modules/Header.module.scss';


// Submenu
export default class Submenu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      menu1: false,
      menu2: false,
    };
    
    // ul.main
    this.menuMain = null;
  }
  
  // ul.main
  setMenuMain = el => {
    this.menuMain = el;
  };
  
  // Set ul.sub position
  setSubmenu = () => {
    let submenuArray = document.getElementsByClassName('sub');
    let liTop = this.menuMain.firstElementChild.clientHeight;
    
    for (let i = 0; i < submenuArray.length; i++) {
      submenuArray[i].style.left = 0;
      submenuArray[i].style.top = liTop + 'px';
    }
  };
  
  // Submenu show / hide
  showMenuSub = flag => {
    this.setState(flag);
  };
  
  
  ////////////////////////////////////////
  
  componentDidMount() {
    this.setSubmenu();
    window.addEventListener('resize', this.setSubmenu);
  }
  
  render() {
    return (
      <ul
        ref={this.setMenuMain}
        className={Styles.main}>
        <li
          onMouseOver={() => this.showMenuSub({ menu1: true })}
          onMouseOut={() => this.showMenuSub({ menu1: false })}
        >Menu 1
          <ul className={`${Styles.sub} ${this.state.menu1 ? Styles.show : ''} sub`}>
            <li>Submenu 1</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
          </ul>
        </li>
        <li
          onMouseOver={() => this.showMenuSub({ menu2: true })}
          onMouseOut={() => this.showMenuSub({ menu2: false })}
        >Menu 2
          <ul className={`${Styles.sub} ${this.state.menu2 ? Styles.show : ''} sub`}>
            <li>Submenu 4</li>
            <li>Submenu 5</li>
            <li>Submenu 6</li>
            <li>Submenu 7</li>
            <li>Submenu 8</li>
          </ul>
        </li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    );
  }
}
