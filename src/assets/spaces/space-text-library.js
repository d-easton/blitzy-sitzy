import React, {Component} from 'react'; 
import Space from "../../components/nation/components/space";

/*
    Library of space objects that constitute the track of each nation. 
    
    The text and effect of spaces at each id are grouped by nation in arrays. These 
    arrays are packaged into a dicitonary {nationID: space arry} which is then exported

    The space component itself is defined in the components/.../space directory, this file contians
    only the data model (note: could be replaced by an api call)
*/


// Germany spaces
const DE1 = new Space(0, "Move forward one space", "Berlin", "DE");
const DE2 = new Space(1, "Gain 2 victory points", "Hamburg", "DE");
const DE3 = new Space(2, "Lose 1 victory point", "Munich", "DE");

// Great Britain spaces
const GB1 = new Space(3, "Move forward one space", "London", "GB");
const GB2 = new Space(4, "Gain 2 victory points", "Bristol", "GB"); 
const GB3 = new Space(5, "Lose 1 victory point", "York", "GB"); 

// Russia spaces
const RUS1 = new Space(6, "Move forward one space", "Moscow", "RUS");
const RUS2 = new Space(7, "Gain 2 victory points", "Petrograd", "RUS");
const RUS3 = new Space(8, "Lose 1 victory point", "Kiev", "RUS");

// France spaces
const FR1 = new Space(9, "Move forward one space", "Paris", "FR");
const FR2 = new Space(10, "Gain 2 victory points", "Lyon", "FR"); 
const FR3 = new Space(11, "Lose 1 victory point", "Dijon", "FR"); 

const spacesGermany = [DE1, DE2, DE3];
const spacesRussia = [RUS1, RUS2, RUS3];
const spacesFrance = [FR1, FR2, FR3];
const spacesBritain = [GB1, GB2, GB3];

let Spaces = {
    "DE":spacesGermany,
    "GB":spacesBritain,
    "RUS":spacesRussia,
    "FR":spacesFrance
}
export default Spaces;