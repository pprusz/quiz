import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questions";

const MainGame = () => {
  const [counter, setCounter] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex]);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  
  useEffect(() => {
    // setCurrentQuestion(questions[questionIndex]);

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          clearInterval(interval);
          return prevTimeLeft;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);



 const handleAnswerClick = (index, answer) => {
  const answerElements = document.querySelectorAll('.answer');

  if (currentQuestion.selectedAnswer === index) {
    setCurrentQuestion({
      ...currentQuestion,
      selectedAnswer: null,
    });
  } else {
    setCurrentQuestion({
      ...currentQuestion,
      selectedAnswer: index,
      currentAnswer: answer,
    });
    for (let i = 0; i < answerElements.length; i++) {
      if (i===index){
        answerElements[i].classList.add("selected")
      }
    }
  }
};

const handleAnswerCheck = () => {
  if (currentQuestion.correctAnswer === currentQuestion.currentAnswer) {
    setCounter(counter + 1);
    if (counter >= questions.length) {
      navigate("/good");
    } else {
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(questions[questionIndex + 1]);
    }
    console.log('dobra odpowiedź!')
    // console.log(currentQuestion.currentAnswer)
  } else {
    navigate("/bad");
    console.log('zła odpowiedź!')
    // console.log(currentQuestion.correctAnswer)
    // console.log(currentQuestion.currentAnswer)
  }
};
console.log(questionIndex)
// console.log(question[i])




  return (
    <div className="game_container">
      <div className="game_container_question_counter">
        <div className="game_container_question_counter_element">{counter}</div>
      </div>

      <div className="game_container_main">
        <div className="game_container_main_question">{currentQuestion.question}</div>
        <div className="game_container_main_answers">
          {currentQuestion.answers.map((answer, index) => (
            <div
              className={`answer ${currentQuestion.selectedAnswer === index ? "selected" : ""}`}
              key={index}
              onClick={() => handleAnswerClick(index , answer)}
            >
              {answer}
            </div>
          ))}
</div>
      </div>

      <div className="game_container_buttons">

        <div className="game_container_buttons_help">

          <button className="game_container_buttons_help_fifty">
            50:50
            <span className="tooltip">Usuń dwie błędne odpowiedzi</span>
            </button>

          <button className="game_container_buttons_help_public">
            <span className="fas fa-user"></span>
            <span className="tooltip">Zapytaj publiczność</span>
            </button>

          <button className="game_container_buttons_help_change">
            <span className="fas fa-arrow-right"></span>
            <span className="tooltip">Zmień pytanie</span>
            </button>

        </div>


        <div className="game_container_buttons_clock"><span>{timeLeft}</span></div>


        <div className="game_container_buttons_check">
          <button onClick={handleAnswerCheck} className="game_container_buttons_check_button">Sprawdź odpowiedź</button>
        </div>
      </div>
    </div>
  );
};

export { MainGame };













































// <div className="game_container">

// <div className="game_container_question_counter">
//  <div className="game_container_question_counter_element">1</div>
// </div>


// <div className="game_container_main">
//  <div className="game_container_main_question">{props}</div>
//  <div className="game_container_main_answers">


//  {currentQuestion.answers.map((answer, index) => (
//    <div key={index} className="game_container_main_answers_element">
//      <div onClick={()=>handleAnswer(answer)} className="game_container_main_answers_element_answer">{answer}</div>
//      <div className="game_container_main_answers_element_money">
//        <div className="money_buttons">
//          <button className="money_buttons_btn">+25k</button>
//          <button className="money_buttons_btn">+50k</button>
//          <button className="money_buttons_btn">+100k</button>
//          <button className="money_buttons_btn">All</button>
//        </div>
//        <div className="game_container_main_answers_element_money_added">0</div>
//      </div>
//    </div>
//  ))}

   
//  </div>
// </div> 

// <div className="game_container_money_container"></div>
// </div>
