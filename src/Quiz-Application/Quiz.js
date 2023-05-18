import React, { useEffect, useState } from 'react'
import { QuizData } from './QuizData'
import './Quiz.css'
import QuizResult from './QuizResult';


export default function Quiz() {
    const [currentQuestin, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickOption] = useState(0);
    const [showResult, SetShowResult] = useState(false);
    const [submitbutton, setSubmitButton] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(60);


    useEffect(() => {
        // Start the timer
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        // Check if time has run out
        if (timeRemaining === 0) {
            clearInterval(timer);
            handleTimeUp();
        }

        // Clean up the timer on component unmount
        return () => clearInterval(timer);
    }, [timeRemaining]);

    function handleTimeUp() {
        setSubmitButton(10); // Set submitButton to a value that will trigger showResult
        SetShowResult(true);
    }

    function handleNext() {
        setSubmitButton(submitbutton + 1)
        updateScore();
        if (currentQuestin < QuizData.length - 1) {
            setCurrentQuestion(currentQuestin + 1)
            setClickOption(0)
        }
        else {
            SetShowResult(true)
        }
    }
    function updateScore() {
        if (clickedOption === QuizData[currentQuestin].answer) {
            setScore(score + 1)
        }
    }

    function handlePlayAgain() {
        setCurrentQuestion(0);
        SetShowResult(false);
        setClickOption(0);
        setScore(0);
        setTimeRemaining(60);
    }

    return (
        <>
            <div className='quizdiv'>
                {showResult ? (<QuizResult score={score} totalScore={QuizData.length} tryAgain={handlePlayAgain} />) : (
                    <>
                        <h1 style={{ marginLeft: '6VW' }}>Attempt Quiz </h1>
                        <h3>Remaining Times: {timeRemaining}s</h3>
                        <h4>  <span>{currentQuestin + 1}. </span> <span>{QuizData[currentQuestin].question}</span></h4>
                        {
                            QuizData[currentQuestin].options.map((option, index) => {
                                return (<div key={index}>
                                    <h2 className='option-btn' onClick={() => setClickOption(index + 1)}>{option}</h2>

                                </div>
                                )

                            })
                        }
                        {
                            submitbutton < 9 ? <button onClick={handleNext} className='next-btn'>Next</button> : <button onClick={handleNext} className='next-btn'>Submit</button>
                        }

                    </>
                )}
            </div>


        </>
    )
}
