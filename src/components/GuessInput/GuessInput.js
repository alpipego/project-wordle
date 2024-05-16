import React from 'react';

function GuessInput({addGuess}) {
    const [guess, setGuess] = React.useState('');

    return (
        <form className="guess-input-wrapper" onSubmit={e => {
            e.preventDefault();
            addGuess(guess);
            setGuess('');
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                pattern="[A-Z]{0,5}"
                maxLength={5}
                value={guess}
                onChange={(e) => {
                    e.target.value = e.target.value.toUpperCase();
                    setGuess(e.target.value);
                }}
            />
        </form>
    );
}

export default GuessInput;
