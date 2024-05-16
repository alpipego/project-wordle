import React from 'react';

function GuessInput({addGuess, isFinished}) {
    const [guess, setGuess] = React.useState('');

    return (
        <form className="guess-input-wrapper" onSubmit={e => {
            e.preventDefault();
            addGuess(guess);
            setGuess('');
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                disabled={isFinished}
                required={true}
                id="guess-input"
                type="text"
                pattern="[A-Z]{5}"
                maxLength={5}
                value={guess}
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
            />
        </form>
    );
}

export default GuessInput;
