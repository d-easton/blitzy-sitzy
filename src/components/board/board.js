import React, {Component} from 'react';
import Track from './track';
import './board.css';

class Board extends Component {
    render() {
        const {activeNations} = this.props
        activeNations.map((nation, index) => {
            return (
                <Track>{nation.ID}</Track> // ID and current space
            )
        })
    }
    // generate tracks to represent each nation
}

export default board;