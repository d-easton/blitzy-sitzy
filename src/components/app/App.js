import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import * as utils from '../../utils';
import board from "../board";
import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    // state, with redux probably
  }
  render() {
    return(
      <div className="App">
        <h1>BlitzySitzy Game</h1>
      </div>
    );
  };
}

export default App;

