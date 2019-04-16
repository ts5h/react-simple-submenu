import React from "react";
import Styles from '../scss/module/Header.module.scss';

export default class Header extends React.Component {
  render() {
    return(
      <div className={Styles.box_header}>
        <header className={`clearfix`}>
          <h1>Web Site Name</h1>
          <ul className={Styles.main}>
            <li>Menu 1
              <ul className={Styles.sub}>
                <li>Submenu 1</li>
                <li>Submenu 2</li>
                <li>Submenu 3</li>
              </ul>
            </li>
            <li>Menu 2
              <ul className={Styles.sub}>
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
        </header>
      </div>
    );
  }
}
