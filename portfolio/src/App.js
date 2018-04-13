import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Background.css';
import './AnimatedHeader.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Background">
          <div className="AnimatedHeader"> 
            Buenas tardes.
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
