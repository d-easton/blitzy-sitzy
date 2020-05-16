import React from 'react';
import './nation.css';

class Nation extends Component {
    constructor(props, id) {
        super(props);
        this.isActive = true;
        this.id = id    // unique # or letter symbol refering to each of the four nations
        // this.dieSize                // size of die -- should this be a parameter or determined by id?
        this.location = Nation.startingSpace;
    }

    componenetDidMount(){
        
    }

}

Nation.startingSpace = 0;

