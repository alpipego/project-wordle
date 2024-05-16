import React from 'react';

function GuessResult({guesses}) {
    return (
        <div className="guess-results">
            {guesses.map(({word, id}) => (
                <p className="guess" key={id}>{word}</p>
            ))}
        </div>
    );
}

export default GuessResult;
