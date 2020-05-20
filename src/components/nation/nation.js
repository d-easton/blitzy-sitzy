import React, {Component} from 'react';
import './nation.css';

class Nation extends Component {
    // constructor(props, id) {
    //     super(props);
    //     this.isActive = true;
    //     this.id = id;    // unique # or letter symbol refering to each of the four nations
    //     // this.dieSize                // size of die -- should this be a parameter or determined by id?
    //     this.location = Nation.startingSpace;
    // }

    componenetDidMount(){
        
    }

    render() {
        return(
            <div id = {this.props.id}>
                <h1>
                    {this.props.nationName}
                </h1>
            </div>
        );
    };
};

Nation.startingSpace = 0;

export default Nation;