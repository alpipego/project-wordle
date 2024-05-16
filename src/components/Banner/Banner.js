import React from 'react';

function Banner({isWon, isLost, numGuesses, answer}) {
    if (isWon) {
        return <HappyBanner numGuesses={numGuesses}/>
    }
    if (isLost) {
        return <SadBanner answer={answer}/>
    }

    return <></>;
}

function HappyBanner({numGuesses}) {
    return (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{numGuesses} guess{numGuesses > 1 && 'es'}</strong>.
            </p>
        </div>
    );
}

function SadBanner({answer}) {
    return (
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    );
}

export default Banner;
