import React, {Component} from 'react';
import {connect} from 'react-redux';
import './nation.css';
import roll from "../../utils/roll";
import draw from "../../utils/draw";

import Pawn from "./components/pawn";
import Track from "./components/track";
import DrawButton from "./components/draw-button";
import RollButton from "./components/roll-button";

/*
    Redux container component that handles state corresponding to one active nation. Displays relevant in-game info
    and also works as a control pad for that nation.
*/

class Nation extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;    // unique # or letter symbol refering to each of the four nations
        //this.vp = this.props.victoryPoints;
        this.name = this.props.nationName;

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

    // Interactive handlers
    handleClickRollButton = () => {
        return roll(this.dieSize);
    }

    handleClickDrawButton = () => {
        console.log(draw());
        return;
    }

 
    // Output render
    render() {
        // State selectors
        //const victoryPoints = useSelector(state => state.victoryPoints);
        
        return(
            <div id = {this.props.id}>
                <h1>
                    {this.name} -- VP: {this.props.victoryPoints} 
                </h1>
                {/* <h3>
                    {this.dieSize}
                </h3> */}
                <RollButton class={this.id} dieSize={this.dieSize} onClick></RollButton>
                <DrawButton class={this.id} onclick={this.handleClickRollButton}></DrawButton>
                <button onClick={this.props.handleUpdateVP}>Change Victory Points</button>
                <Track spaces={['x','y','z']}/>
            </div>
        );
    };
};

export default (Nation);