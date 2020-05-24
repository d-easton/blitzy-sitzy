import React, {Component} from 'react';
import './nation.css';
import Pawn from "./components/pawn";

class Nation extends Component {
    constructor(props, id) {
        super(props);
        this.id = this.props.id;    // unique # or letter symbol refering to each of the four nations
        this.vp = 0;

        if(this.id == "DE"){
            this.dieSize = 10;
        }
        else if(this.id == "GB"){
            this.dieSize = 6;
        }
        else if(this.id == "FR") {
            this.dieSize = 4;
        }
        else if(this.id == "RUS") {
            this.dieSize = 8;
        }
        else{
            this.dieSize = 0;
        }
    }

    componenetDidMount(){
        
    }

    render() {
        return(
            <div id = {this.props.id}>
                <h1>
                    {this.props.nationName}
                </h1>
                <h3>
                    {this.dieSize}
                </h3>
            </div>
        );
    };
};

export default Nation;