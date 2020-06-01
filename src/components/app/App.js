import React, {Component} from 'react';
import * as utils from '../../utils';
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
        <Nation id="DE" isActive={true} index={0} nationName={"Germany"} />
        <Nation id="GB" isActive={true} index={1} nationName={"Great Britain"} />
        <Nation id="RUS" isActive={true} index={2} nationName={"Russia"} />
        <Nation id="FR" isActive={false} index={3} nationName={"France"} />
      </div>
    );
  };
}

export default App;

