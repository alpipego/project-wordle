import React from 'react';
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({word, answer}) {
    const checked = checkGuess(word, answer);
    return (
        <p className="guess">
            {range(0, 5).map(column => {
                return (
                    <span className={`cell ${checked !== null && checked[column].status}`} key={column}>
                        {word && word[column]}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
