import React from 'react';
import {range} from "../../utils";

function Guess({word}) {
    return (
        <p className="guess">
            {range(0, 5).map(column => {
                return (
                    <span className="cell" key={`column-${column}`}>
                        {word && word[column]}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
