import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    function addGuess(guess) {
        if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
            return;
        }

        if (guesses.includes(guess)) {
            window.alert('You already guessed that 😁')
            return;
        }

        setGuesses([...guesses, guess]);
    }

    return (
        <>
            <GuessResult guesses={guesses} />
            <GuessInput addGuess={addGuess} />
        </>
    );
}

export default Game;
