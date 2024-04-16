import React, { useState } from 'react';

const Home = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
  
    const questions = [
      {
        question: 'What is the capital of France?',
        type: 'radio',
        options: ['Paris', 'Berlin', 'London', 'Rome'],
        answer: 'Paris',
      },
      {
        question: 'What is the capital of India?',
        type: 'radio',
        options: ['Bhopal', 'Delhi', 'Germany', 'New Delhi'],
        answer: 'New Delhi',
      },
      {
        question: 'What is the capital of Madhya Pradesh?',
        type: 'radio',
        options: ['Bhopal', 'Delhi', 'Germany', 'New Delhi'],
        answer: 'Bhopal',
      },
      {
        question: 'Which planets are considered gas giants? (Select all that apply)',
        type: 'checkbox',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: ['Jupiter', 'Saturn'],
      },
      {
        question: 'Who is the CEO of Tesla?',
        type: 'input',
        answer: 'Elon Musk',
      },
      {
        question: 'Share your feedback about this quiz:',
        type: 'textarea',
        answer: '',
      },
      // Add more questions here
    ];
  
    const handleAnswerSelection = (selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = selectedAnswer;
        setAnswers(updatedAnswers);
      };
    
      const handleNextQuestion = () => {
        if (
          answers[currentQuestion] === questions[currentQuestion].answer ||
          JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
          setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowScore(true);
        }
      };
    
  return (
    <>
      {showScore ? (
        <div>
          <h2>Quiz Complete!</h2>
          <h3>Your Score: {score}</h3>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].type === 'radio' && (
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name={`question${currentQuestion}`}
                    value={option}
                    onChange={() =>
                      handleAnswerSelection(option)
                    }
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}
          {questions[currentQuestion].type === 'checkbox' && (
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={`question${currentQuestion}`}
                    value={option}
                    onChange={(e) =>
                      handleAnswerSelection({
                        ...answers[currentQuestion],
                        [option]: e.target.checked,
                      })
                    }
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}
          {questions[currentQuestion].type === 'input' && (
            <input
              type="text"
              onChange={(e) =>
                handleAnswerSelection(e.target.value)
              }
            />
          )}
          {questions[currentQuestion].type === 'textarea' && (
            <textarea
              rows="4"
              cols="50"
              onChange={(e) =>
                handleAnswerSelection(e.target.value)
              }
            />
          )}
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </>
  )
}

export default Home
