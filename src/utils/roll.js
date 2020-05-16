import React from 'react';

/*
    Helper function to simulate a die roll
    Because every nation has a die with a different number of sides,
    the die size must be passed as an argument.
*/

function roll(numSides) {
    return Math.ceil(Math.random() * numSides);
}