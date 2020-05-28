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
        <Nation id="DE" isActive={true} nationName={"Germany"} />
        <Nation id="GB" isActive={true} nationName={"Great Britain"} />
        <Nation id="RUS" isActive={true} nationName={"Russia"} />
        <Nation id="FR" isActive={false} nationName={"France"} />
      </div>
    );
  };
}

export default App;

