export {getRandom, checkValid, checkWin, play, rps, rpsls}

// helper function that will find random integer
function getRandom(options) {
    return options[Math.floor(Math.random() * options.length)];
}

// helper function that will check for valid options
function checkValid(option1, options) {
    return options.includes(option1);
}

// helper function that will check if conditions have been met to win
function checkWin(opiton1, option2, winConditions) {
    return winConditions[opiton1].includes(option2);
}

/* Play function:
Essentially a parent function that has the common code that rps and rpsls will have
I must ensure that varibale humanturn is defined
Ensure that the code is case agnostic by converting to lower case
Also ensure that I have a valid set of variables 
I will then compare turn1 to turn2, checking if they are equivalent, if a win condition has been met or return that they have lost.*/

function play(humanTurn, options, winConditions) {
    if (humanTurn === undefined) {
        humanTurn = getRandom(options);
    } else {
        humanTurn = tu.toLowerCase();
        if (!checkValidOption(shot,options)) {
            throw new Error();
        }
    }

    let compTurn = getRandomOption(options);
    if (humanTurn === compTurn) {
        return { player: humanTurn, opponent: compTurn, result: "tie" };
    } else if (checkWin(humanTurn, compTurn, winConditions)) {
      return { player: humanTurn, opponent: compTurn, result: "win" };
    } else {
      return { player: humanTurn, opponent: compTurn, result: "lose" };
    }
}
// rps defined options and winconditions
function rps(turn) {
    const options = ["rock", "paper", "scissors"];
    const winConditions = {
        rock: ["scissors"],
        paper: ["rock"],
        scissors: ["paper"],
    };
    return play(turn, options, winConditions);
}

// rpsls defined options and winconditions
function rpsls(turn) {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const winConditions = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["rock", "scissors"],
    };
    return play(turn, options, winConditions);
}