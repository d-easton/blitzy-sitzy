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

/*

const DE1 = {id: 0, effect:"Move forward one space", text: "Berlin", nations: "DE"};
const DE2 = {id: 1, effect:"Gain 2 victory points", text: "Hamburg", nations: "DE"};
const DE3 = {id: 2, effect:"Lose 1 victory point", text: "Munich", nations: "DE"};


// Great Britain spaces
const GB1 = {id: 3, effect:"Move forward one space", text: "London", nations: "GB"};
const GB2 = {id: 4, effect:"Gain 2 victory points", text: "Bristol", nations: "GB"};
const GB3 = {id: 5, effect:"Lose 1 victory point", text: "York", nations: "GB"};

// Russia spaces
const RUS1 = {id: 6, effect:"Move forward one space", text: "Moscow", nations: "RUS"};
const RUS2 = {id: 7, effect:"Gain 2 victory points", text: "St. Petersburg", nations: "RUS"};
const RUS3 = {id: 8, effect:"Lose 1 victory point", text: "Tver", nations: "RUS"};

// France spaces
const FR1 = {id: 9, effect:"Move forward one space", text: "Paris", nations: "FR"};
const FR2 = {id: 10, effect:"Gain 2 victory points", text: "Lyon", nations: "FR"};
const FR3 = {id: 11, effect:"Lose 1 victory point", text: "Dijon", nations: "FR"};
*/
const spacesGermany = [DE1, DE2, DE3];
//const spacesRussia = [RUS1, RUS2, RUS3];
//const spacesFrance = [FR1, FR2, FR3];
//const spacesBritain = [GB1, GB2, GB3];

let Spaces = {
    "DE":spacesGermany,
    // "GB":spacesBritain,
    //"RUS":spacesRussia,
  //  "FR":spacesFrance
}
export default Spaces;