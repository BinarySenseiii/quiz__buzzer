import React from 'react'
import resultSvg from './undraw_winners_ao2o 2.svg'
import './result.css'

const Result = ( { score, setFinalResult, newGame } ) => {
    return (
        <div className="result__page">
            <img src={resultSvg} alt="not found" />
            <main>
                <h1>Results</h1>
                <p>you got <strong> { score } </strong> correct answer{score>1 ? 's' : ''}  </p>
            </main>
            <button onClick={() => setFinalResult(true)}>
                {newGame ? 'Restarting...' : 'try again'}
            </button>
        </div>
    )
}

export default Result
