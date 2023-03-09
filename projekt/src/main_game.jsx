import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questions";

const MainGame = () => {
  const [gameQuestions, setGameQuestions] = useState();
  const [counter, setCounter] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex]);
  const navigate = useNavigate();
  const [disabledIndexes, setDisabledIndexes] = useState([]);

  // Ustawienia do disabled do podpowiedzi 
  const [fiftyDisabled, setFiftyDisabled] = useState(false);
  const [changeDisabled, setChangeDisabled] = useState(false);
  const [publicDisabled, setPublicDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function setPercentage() {
    const bars = document.getElementsByClassName("modal_content_element_bar");
    const percentages = document.getElementsByClassName('modal_content_element_percentage')
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${currentQuestion.public[i]*2}px`;
      percentages[i].innerHTML = `${currentQuestion.public[i]}%`;
    }
  }
const handlePublicClick = () => {
  setShowModal(true);
};
const handlePublicAsk = () =>{
  setPercentage();
  setPublicDisabled(prevState => true);
}




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
      const disabledElements = document.querySelectorAll(".disabled");
      disabledElements.forEach(element => element.classList.remove("disabled"));
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(questions[questionIndex + 1]);
    }
  } else {
    navigate("/bad");
  }
  setDisabledIndexes([]);

};

const handle50Click = () => {
  const correctAnswerIndex = currentQuestion.answers.findIndex(
    (answer) => answer === currentQuestion.correctAnswer
  );
  const allAnswersIndexes = currentQuestion.answers.map((_, index) => index);
  let wrongAnswerIndexes = allAnswersIndexes.filter(index => index !== correctAnswerIndex);
  const randomIndex1 = wrongAnswerIndexes[Math.floor(Math.random() * wrongAnswerIndexes.length)];
  wrongAnswerIndexes = wrongAnswerIndexes.filter((index) => index !== randomIndex1);
  const randomIndex2 = wrongAnswerIndexes[Math.floor(Math.random() * wrongAnswerIndexes.length)];
  wrongAnswerIndexes = wrongAnswerIndexes.filter((index) => index !== randomIndex2);
  wrongAnswerIndexes = [randomIndex1, randomIndex2];
  setDisabledIndexes(wrongAnswerIndexes);
  setFiftyDisabled(prevState => true);
};

const handleChangeClick = () => {
  if (questionIndex < questions.length - 1) {
    setCurrentQuestion(questions[questionIndex + 1]);
    setQuestionIndex(questionIndex + 1);
    setChangeDisabled(prevState => true);
  }
};
  return (
    <div className="game_container">
      <div className="game_container_question_counter">
        <div className="game_container_question_counter_element">{counter}</div>
      </div>
      {showModal && (
            <div className="modal">
              <div className="modal_content">
                <span className="modal_close" onClick={() => setShowModal(false)}>x</span>
                <h1 className="modal_content_question">{currentQuestion.question}</h1>
                <div className="modal_content_chart">
                {currentQuestion.answers.map((answer, index) => (
                  <div className="modal_content_element" key={index}>
                    <div className="modal_content_element_percentage"></div>
                    <div className="modal_content_element_bar"></div>
                    <div className='modal_content_element_answer'>{answer}</div>
                  </div>
                ))}
                              
                </div>
                <button onClick={handlePublicAsk} className="game_container_buttons_check_button">Zapytaj publiczność</button>    

              </div>
            </div>
          )}

      <div className="game_container_main">
        <div className="game_container_main_question">{currentQuestion.question}</div>
        <div className="game_container_main_answers">
        {currentQuestion.answers.map((answer, index) => (
          <div
            className={`answer ${currentQuestion.selectedAnswer === index ? "selected" : ""} ${
              disabledIndexes.includes(index) ? "disabled" : ""}`}
              key={index}
              onClick={() => handleAnswerClick(index, answer)} >
              {answer}
          </div>
        ))} 
</div>
      </div>

      <div className="game_container_buttons">

        <div className="game_container_buttons_help">

          <button disabled={fiftyDisabled} onClick={handle50Click} className="game_container_buttons_help_fifty">
            50:50
            <span className="tooltip">Usuń dwie błędne odpowiedzi</span>
            </button>

          <button disabled={publicDisabled} onClick={handlePublicClick} className="game_container_buttons_help_public">
            <span className="fas fa-user"></span>
            <span className="tooltip">Zapytaj publiczność</span>
            </button>

          

          <button disabled={changeDisabled} onClick={handleChangeClick} className="game_container_buttons_help_change">
            <span className="fas fa-arrow-right"></span>
            <span className="tooltip">Zmień pytanie</span>
            </button>

        </div>

        <div className="game_container_buttons_check">
          <button  onClick={handleAnswerCheck} className="game_container_buttons_check_button">Sprawdź odpowiedź</button>
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
