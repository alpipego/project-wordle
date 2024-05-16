import React from 'react';
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Guess from "../Guess";

function GuessResult({guesses}) {
    const words = [...guesses];

    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map(row => {
                const word = words[row] || '';
                return <Guess word={word} key={row}/>
            })}
        </div>
    );
}

export default GuessResult;
