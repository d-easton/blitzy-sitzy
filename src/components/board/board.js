import React, {Component} from 'react';
//import Track from './track';
import './board.css';

class Board extends Component {
    render() {
        const {activeNations} = this.props
        return(
        
            activeNations.map((nation, index) => {
                return (
                   <h1>board</h1>
                )
            })
        );
    }
    // generate tracks to represent each nation
}

export default Board;