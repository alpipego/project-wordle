import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import WordGrid from "../WordGrid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    function addGuess(guess) {
        if (guesses.length >= 6) {
            return;
        }
        const nextGuesses = [...guesses, {
            word: guess,
            id: crypto.randomUUID()
        }]
        setGuesses(nextGuesses);
    }

    return (
        <>
            <WordGrid guesses={guesses} />
            <GuessInput addGuess={addGuess} />
        </>
    );
}

export default Game;
