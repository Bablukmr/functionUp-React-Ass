
import React from 'react'

export default function QuizResult(props) {
    return (
        <>
            <div style={{ margin: '5vh 5vw' }} >
                <h2> Your Score: {props.score}</h2>
                <h2> Total Score: {props.totalScore}</h2>
                <button onClick={props.tryAgain} style={{
                    height: '50px', width: "120px", borderRadius: "12px", backgroundColor: "Yellow", fontSize: "20px"
                }} >Start Again</button>
            </div>

        </>
    )
}
