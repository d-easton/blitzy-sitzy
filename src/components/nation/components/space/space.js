import React, {Component} from 'react';

class Space extends Component {
    constructor(id, effect, text, nation, props) {  // todo: props must come last here, so fix params
        super(props);
        this.id = id;
        this.effect = effect;
        this.text = text;
        this.nation = nation;
    }

    render() {
      return(<li>{this.props.text}</li>);
   }
       
};

export default Space;