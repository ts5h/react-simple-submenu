import React, { Component } from "react";
import Styles from "../scss/module/Header.module.scss";

// Submenu
export default class Submenu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      menu1: false,
      menu2: false
    };
    
    //let menuHeight = null;
    this.menuHeight = null;
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <ul
        className={Styles.main}>
        <li
          onMouseOver={() => this.setSubmenu({ menu1: true })}
          onMouseOut={() => this.setSubmenu({ menu1: false })}
        >Menu 1
          <ul className={`${Styles.sub} ${this.state.menu1 ? Styles.show : ""}`}>
            <li>Submenu 1</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
          </ul>
        </li>
        <li
          onMouseOver={() => this.setSubmenu({ menu2: true })}
          onMouseOut={() => this.setSubmenu({ menu2: false })}
        >Menu 2
          <ul className={`${Styles.sub} ${this.state.menu2 ? Styles.show : ""}`}>
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
  
  // Handlers
  setSubmenu = flag => {
    this.setState(flag);
    // console.log(flag);
  };
}
