import React, {Component} from 'react';
import './nation.css';
import Pawn from "./components/pawn";
import roll from "../../utils/roll";
import draw from "../../utils/draw";
import DrawButton from "./components/draw-button";
import RollButton from "./components/roll-button";

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

    handleClickRollButton = () => {
        return roll(this.dieSize);
    }

    handleClickDrawButton = () => {
        console.log(draw());
        return;
    }

    render() {
        return(
            <div id = {this.props.id}>
                <h1>
                    {this.props.nationName}
                </h1>
                {/* <h3>
                    {this.dieSize}
                </h3> */}
                <RollButton class={this.id} dieSize={this.dieSize}></RollButton>
                <DrawButton class={this.id} onclick={this.handleClickRollButton}></DrawButton>
            </div>
        );
    };
};

export default Nation;