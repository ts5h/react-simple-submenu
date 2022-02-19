import React, { Component } from 'react';
import Styles from '../scss/modules/Header.module.scss';

// Component
import Submenu from './Submenu';


// Header
export default class Header extends Component {
  render() {
    return (
      <div className={Styles.box_header}>
        <header className={`clearfix`}>
          <h1>
            <a href={process.env.PUBLIC_URL}>React Simple Submenu</a>
          </h1>
          <Submenu/>
        </header>
      </div>
    );
  }
}
