import React, { Component } from 'react';

import './scss/App.scss';

// Contetns
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
  
        {/* Contetns */}
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
