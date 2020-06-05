import React, {Component} from 'react';
import Pawn from "../pawn";

class Space extends Component {
    constructor(id, effect, text, nation, pawns, props) {  // todo: props must come last here, so fix params
        super(props);
        this.id = id;
        this.effect = effect;
        this.text = text;
        this.nation = nation;
        this.pawnList = pawns.map((item) => <Pawn naiton={this.nation}></Pawn>);
    }

    render() {
      return(
          <div>
            <ul>{this.pawnList}</ul>
            <li>{this.props.text}</li>
          </div>
      );
   }
       
};

export default Space;