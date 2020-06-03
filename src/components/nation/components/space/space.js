import React, {Component} from 'react';
//import './space.css';

class Space extends Component {
    constructor(id, effect, text, nation, props) {  // todo: props must come last here, so fix params
        super(props);
        this.id = id;
        this.effect = effect;
        this.text = text;
        this.nation = nation;
    }

    /*
    // accessors
    get id() {
        return this.id;
    }

    get effect() {
        return this.effect;
    }

    get text() {
        return this.text;
    }

    get nation(){
        return this.nation;
    }
    */
    render() {
      return(<li>{this.props.text}</li>);
   }
       
};

export default Space;