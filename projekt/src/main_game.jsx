import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questions";
import { Bad } from "./bad_end";
import { Buttons } from "./buttons_help";

const MainGame = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex]);
  const [disabledIndexes, setDisabledIndexes] = useState([]);
  const gameTime= props.gameTime
  const setGameTime= props.setGameTime
  const setCounter = props.setCounter;
  const counter = props.counter;
  const inputValue = props.inputValue;
  
  const navigate = useNavigate();
 
  

  const [publicDisabled, setPublicDisabled] = useState(false);  
  const [showModal, setShowModal] = useState(false);

  const handlePublicAsk = () =>{
    setPercentage();
    setPublicDisabled(prevState => true);
  }
  function setPercentage() {
    const bars = document.getElementsByClassName("modal_content_element_bar");
    const percentages = document.getElementsByClassName('modal_content_element_percentage')
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${currentQuestion.public[i]*2}px`;
      percentages[i].innerHTML = `${currentQuestion.public[i]}%`;
    }
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


const startTime = Date.now();

useEffect(() => {
  const intervalId = setInterval(() => {
    setGameTime(Math.floor((Date.now() - startTime)/1000));
    
  }, 1000);
  return () => clearInterval(intervalId);
}, []);






  return (
    <div className="game_container">
      <div className="game_container_question_counter">
        <div className="game_container_question_counter_element">Pytanie {counter} z 12</div>
        <div className="game_container_question_counter_element">Czas gry: {gameTime} s</div>
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

      <Buttons 
      counter={counter} 
      setCounter={setCounter} 
      questionIndex = {questionIndex} 
      setQuestionIndex = {setQuestionIndex} 
      currentQuestion = {currentQuestion} 
      setCurrentQuestion = {setCurrentQuestion}
      showModal = {showModal}
      setShowModal = {setShowModal}
      publicDisabled = {publicDisabled}
      setPublicDisabled = {setPublicDisabled}
      disabledIndexes = {disabledIndexes}
      setDisabledIndexes = {setDisabledIndexes}
      gameTime = {gameTime}
      inputValue = {inputValue}
      
      />

      
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
