import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/board/board'

class App extends Component {
  render() {
    const style = {
      width: '1100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Monopoly</h1>
        </header>
        <div style={style}>
          <BoardComponent/>
        </div>
      </div>
    );
  }
}

export default App;
