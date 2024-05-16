import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    const isLost = guesses.length >= NUM_OF_GUESSES_ALLOWED;
    const isWon = guesses.includes(answer);

    function addGuess(guess) {
        if (isLost) {
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
            <GuessResult guesses={guesses} answer={answer} />
            <Banner isWon={isWon} isLost={isLost} numGuesses={guesses.length} answer={answer} />
            <GuessInput addGuess={addGuess} isFinished={isWon || isLost}/>
        </>
    );
}

export default Game;
