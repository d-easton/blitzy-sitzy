import React from 'react';
import cards from '../assets/cards/card-library.js'

/*
    Helper function to simulate a die roll
    Because every nation has a die with a different number of sides,
    the die size must be passed as an argument.
*/

function draw () {
    return cards[ (Math.random()*cards.length) ];
}