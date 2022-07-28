import React, { useState } from 'react';
import './App.scss';
import questions from './data/data';

const App = () => {
  const [chosenAnswer, setChosenAnswer] = useState<number>();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [toggleNextButton, setToggleNextButton] = useState(false);
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const resultText = () => {
    if (result < 4) {
      return 'Man ļoti žēl! Mums nav pa ceļam! :(';
    } if (result < 7) {
      return 'Ak vai! Mums būtu jātiekas biežāk!';
    } if (result < 10) {
      return 'Apsveicu! Tu pazīsti mani ļoti labi!';
    }
    return 'Super! Mēs esam labākie draugi! :)';
  };

  const resultPercent = () => (result / 10) * 100;

  return (
    <div className="App">
      <section className="section">
        <h1 className="title">Pārbaudi! Cik daudz Tu zini par mani?</h1>
        {questionNumber !== 10
          ? (
            <div className="questionContainer">
              <h2 className="questionTitle">
                {questions[questionNumber].question}
                <span className="questionStep">{`(${questionNumber + 1} no 10)`}</span>
              </h2>
              {!toggleAnswer ? (
                <div className="answersContainer">
                  {questions[questionNumber].answers.map((answer) => (
                    <button
                      key={answer.id}
                      className="answerButton"
                      onClick={() => {
                        setChosenAnswer(answer.id);
                        setResult(answer.id === questions[questionNumber].correctAnswer ? result + 1 : result);
                        setToggleNextButton(true);
                        setToggleAnswer(true);
                      }}
                    >
                      {answer.name}
                    </button>
                  ))}
                </div>
              )
                : (
                  <div className="answersContainer">
                    {questions[questionNumber].answers.map((answer) => (
                      <div
                        key={answer.id}
                        className={`answerBox ${answer.id === questions[questionNumber].correctAnswer
                        && 'answerCorrect'} ${answer.id === chosenAnswer
                        && chosenAnswer !== questions[questionNumber].correctAnswer && 'answerWrong'}`}
                      >
                        {answer.name}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ) : (
            <div className="resultContainer">
              <h2 className="resultTitle">Tavs rezultāts:</h2>
              <h2 className="resultSummary">{`${resultPercent()}% (${result} no 10)`}</h2>
              <h2 className="resultRating">{resultText()}</h2>
            </div>
          )}
        { toggleNextButton
            && (
            <button
              className="nextButton"
              onClick={() => {
                setToggleNextButton(false);
                setToggleAnswer(false);
                setQuestionNumber(questionNumber + 1);
              }}
            >
              {questionNumber !== 9 ? 'Nākošais jautājums' : 'Parādīt rezultātu'}
            </button>
            )}
      </section>
    </div>
  );
};

export default App;
