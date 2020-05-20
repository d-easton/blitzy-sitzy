import React, {Component} from 'react';
import * as utils from '../../utils';
import board from "../board";
import './app.css';
import Nation from "../nation/index";

class App extends Component {
  constructor(props){
    super(props);
    // state, with redux probably
  }
  render() {
    return(
      <div className="App">
        <div className = "title-box">
          <h1>BlitzySitzy Game</h1>
        </div>
        <Nation id="DE" nationName={"Germany"}>test</Nation>
        <Nation id="GB" nationName={"Great Britain"}>test2</Nation>
        <Nation id="RUS" nationName={"Russia"}>test3</Nation>
        <Nation id="FR" nationName={"France"}>test4</Nation>
      </div>
    );
  };
}

export default App;

