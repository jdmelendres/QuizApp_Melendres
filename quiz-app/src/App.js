import React, { useState } from 'react';
import './App.css';

const quizData = [
    { question: 'Who painted the Mona Lisa', options: ['San Miguel', 'Da Vinci', 'Leonardo San Miguel', 'Juan Luna'], correctAnswer: 'Da Vinci' },
    { question: 'What is 3 * 3?', options: ['9', '16', '12', '6'], correctAnswer: '9' },
    { question: 'Who wrote "Romeo and Juliet"?', options: ['William Shakespeare', 'San Miguel', 'Andrei Jose', 'Jay Mark'], correctAnswer: 'William Shakespeare' }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            {showResult ? (
                <div className="result">
                    <p>Your score: {score} out of {quizData.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="question">
                        <p>{quizData[currentQuestion].question}</p>
                    </div>
                    <div className="options">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option" onClick={() => handleAnswerClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
