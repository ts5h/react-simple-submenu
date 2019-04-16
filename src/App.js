import React, { Component } from 'react';
import logo from './logo.svg';

import './scss/App.scss';

// Contetns
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={`box_header`}>Web Site Name</div>
        
        
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.<br/>*/}
        {/*      日本語テスト*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
  
        {/* Contetns */}
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
