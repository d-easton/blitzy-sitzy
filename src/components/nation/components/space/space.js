import React, {Component} from 'react';
//import './space.css';

class Space extends Component {
    constructor(props, id, effect, text, nation) {
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
      return(<p> {this.text} </p>);
   }
       
};

export default Space;