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
    this.setMenuMain = el => {
      this.menuMain = el;
    };
    
    // Set ul.sub position
    
    this.setSubmenuPosition = () => {
      let submenuArray = document.getElementsByClassName('sub');
      for (let i = 0; i < submenuArray.length; i++) {
        submenuArray[i].style.left = 0;
        submenuArray[i].style.top = this.menuMain.clientHeight + 'px';
      }
    };
    
    // ul.sub show / hide
    this.showSubmenu = (flag) => {
      this.setState(flag);
    };
  }
  
  componentDidMount() {
    this.setSubmenuPosition();
  }
  
  render() {
    return (
      <ul
        ref={this.setMenuMain}
        className={Styles.main}>
        <li
          onMouseOver={() => this.showSubmenu({ menu1: true })}
          onMouseOut={() => this.showSubmenu({ menu1: false })}
        >Menu 1
          <ul className={`${Styles.sub} ${this.state.menu1 ? Styles.show : Styles.hide} sub`}>
            <li>Submenu 1</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
          </ul>
        </li>
        <li
          onMouseOver={() => this.showSubmenu({ menu2: true })}
          onMouseOut={() => this.showSubmenu({ menu2: false })}
        >Menu 2
          <ul className={`${Styles.sub} ${this.state.menu2 ? Styles.show : Styles.hide} sub`}>
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
