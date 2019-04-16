import React from "react";
import Styles from '../scss/module/Header.module.scss';

// Component
import Submenu from './Submenu';

export default class Header extends React.Component {
  render() {
    return(
      <div className={Styles.box_header}>
        <header className={`clearfix`}>
          <h1>Web Site Name</h1>
          <Submenu></Submenu>
        </header>
      </div>
    );
  }
}
