// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
    // Note: `cardNumber` will always be a string
    // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
    // The American Express network always starts with a 34 or 37 and is 15 digits long
    /*

    Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
    Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
    MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
    China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
    Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
    Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
    */
    cardNumber = cardNumber.split("").map(Number);
    if ((cardNumber[0] === 3) && (cardNumber[1] === 8 || cardNumber[1] === 9) && (cardNumber.length === 14)){
        return `Diner's Club`
    } else if (cardNumber[0] === 3 && cardNumber[1] === 4 || cardNumber[1] === 7 && cardNumber.length === 15){
        return 'American Express'
    } else if ((cardNumber[0] === 6 && cardNumber[1] === 0 && cardNumber[2] === 1 && cardNumber[3] === 1) || (cardNumber[0] === 6 && cardNumber[1] === 4 && (cardNumber[2] >=4 && cardNumber[2] <=9)) || (cardNumber[0] === 6 && cardNumber[1] === 5)  && (cardNumber.length === 16 || cardNumber.length === 19)) {
        return 'Discover'
    }  else if ((Number(cardNumber.slice(0,4).join("")) >= 4903 && Number(cardNumber.slice(0,4).join("")) <= 4905) || (Number(cardNumber.slice(0,4).join("")) >= 4911 && Number(cardNumber.slice(0,4).join("")) <= 4936) || (Number(cardNumber.slice(0,4).join("")) >= 6333 && Number(cardNumber.slice(0,4).join("")) <= 6759) || (Number(cardNumber.slice(0,6).join("")) === 564182) || (Number(cardNumber.slice(0,6).join("")) === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)){
        return 'Switch'
    } else if ((cardNumber[0] === 4) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
        return `Visa`
    }  else if ((cardNumber[0] === 5 && cardNumber[1] === 0 && (cardNumber[2] >= 1 && cardNumber[2] <=3) && (cardNumber[3] === 8 || cardNumber[3] === 0 || cardNumber[3] === 4)) || (cardNumber[0] === 6 && cardNumber[1] === 3 && cardNumber[2] === 0 && cardNumber[3] === 4) && (cardNumber.length >= 12 && cardNumber.length <= 19)){
        return 'Maestro'
    } else if ((Number(cardNumber.slice(0,6).join("")) >= 622126 && Number(cardNumber.slice(0,6).join("")) <= 622925) || (Number(cardNumber.slice(0,3).join("")) >= 624 && Number(cardNumber.slice(0,3).join("")) <= 626) || (Number(cardNumber.slice(0,4).join("")) >= 6282 && Number(cardNumber.slice(0,4).join("")) <= 6288) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
        return 'China UnionPay'
    } else {
        return 'MasterCard'
    }

    // Once you've read this, go ahead and try to implement this function, then return to the console.
};
