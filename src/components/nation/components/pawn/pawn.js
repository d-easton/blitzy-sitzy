import React, {Component} from 'react';
import './pawn.css';

class Pawn extends Component {
    constructor(props, location=0, pawnID, ownerNation) {
        super(props);
        this.location = this.props.location;
        this.id = this.props.pawnID;
        this.ownerNation  = this.props.ownerNation;
    }

    render() {
        return(
            <div className = "pawnDot" nation = {this.props.ownerNation}></div>
        );
    };
};

Nation.startingSpace = 0;

export default Nation;