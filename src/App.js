import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/board/board'

class App extends Component {
  render() {
    const style = {
      width: '1500px',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={style}>
          <BoardComponent/>
        </div>
      </div>
    );
  }
}

export default App;
