import React, { useState } from 'react';
import ResultTable from './resultTable';
import Question from './question';
import './quiz.css';

function Quiz() {

  const questions = [{
    id: 1,
    question: "question1",
    options: ['a', 'b', 'c', 'd'],
    answer: "a",
    selectedOption: null,
    status: 'Not attempted'
  }, {
    id: 2,
    question: "question2",
    options: ['a', 'b', 'c', 'd'],
    answer: "b",
    selectedOption: null,
    status: 'Not attempted'
  }, {
    id: 3,
    question: "question3",
    options: ['a', 'b', 'c', 'd'],
    answer: "c",
    selectedOption: null,
    status: 'Not attempted'
  }, {
    id: 4,
    question: "question4",
    options: ['a', 'b', 'c', 'd'],
    answer: "d",
    selectedOption: null,
    status: 'Not attempted'
  }];

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [questionList, setQuestionList] = useState(questions);

  const handleSubmitFn = (selectedOption) => {
    let questionListCopy = deepCopy(questionList);
    let currentQuestion = questionListCopy[selectedQuestionIndex];
    currentQuestion.selectedOption = selectedOption;
    currentQuestion.status = !currentQuestion.selectedOption
      ? 'Not attempted'
      : selectedOption === currentQuestion.answer
        ? "Correct answer"
        : "Incorrect answer"
    questionListCopy[selectedQuestionIndex] = currentQuestion;
    setQuestionList(questionListCopy);
    nextQuestion();
  }

  const nextQuestion = () => {
    setSelectedQuestionIndex(selectedQuestionIndex+1);
  }

  function deepCopy(src){
    if(typeof src !== "object" || src === null) {
      return src // Return the value if src is not an object
    }
    let target = Array.isArray(src) ? [] : {};
    for (let key in src) {
      let obj = src[key];
      if (obj) {
        if (typeof obj === "object") {
          target[key] = deepCopy(obj);
        } else {
          target[key] = obj;
        }
      } else {
        target[key] = obj;
      }
    }
    return target;
  }

  return (
    <>
      {
        selectedQuestionIndex === questionList.length
        ? <ResultTable list={questionList} />
        : <div className="quiz-section">
            <Question
              currentQuestion={questionList[selectedQuestionIndex]}
              handleSubmit={handleSubmitFn}
              handleSkip={nextQuestion}
            />
          </div>
      }
    </>
  );
}

export default Quiz;
