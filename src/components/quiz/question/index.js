import React, { useState,useEffect } from 'react';

function Question(props) {

  const [selectedOption, setOptionValue] = useState("");
  const [timer, setTimerCountdown] = useState(20);

  useEffect(() => {
    setOptionValue("");
    setTimerCountdown(20);
  }, [props.currentQuestion.id]);

  useEffect(() => {
    if (!timer) {
      if (selectedOption) {
        return props.handleSubmit(selectedOption);
      }
      return props.handleSkip();
    }

    const intervalId = setInterval(() => {
      setTimerCountdown(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <div className="container">
      <h1>Time left: 00:{timer}</h1>
      <div className="card-panel">
        <h4 className="question__label">{props.currentQuestion.question}</h4>
        <div className="question__options">
          {
            props.currentQuestion.options.map((item, index) => {
              return (
                <p key={index}>
                  <label>
                    <input
                      type="radio"
                      id={item}
                      name={props.currentQuestion.id}
                      value={item}
                      onChange={(e)=>setOptionValue(e.target.value)}
                      checked={item === selectedOption}
                    />
                    <span className="black-text">{item}</span>
                  </label>
                </p>
              )
            })
          }
        </div>
        <div>
          {<button className="btn submit-btn" disabled={!selectedOption} onClick={()=>props.handleSubmit(selectedOption)}>Submit answer</button> }
          {<button className="btn" onClick={()=>props.handleSkip()}>Skip Question</button> }
        </div>
      </div>
    </div>
  );
}

export default Question;
