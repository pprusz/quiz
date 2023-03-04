import "../scss/main.scss";

import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import { questions } from "./questions";

const container = document.querySelector('.app')
const root = createRoot(container)


// const newGameContainer= document.querySelector('.new_game');
// const startButton= document.querySelector('.new_game_button');
// const categories= document.querySelector('.category_container');
// const categoryButton = document.querySelector('.category_container_button');
// const gameContainer = document.querySelector('.game_container');

 /* <div className="new_game">
      <button onClick={newGameBtn} className="new_game_button">Rozpocznij nową gre!</button>
    </div> */

// startButton.addEventListener('click', (event)=>{
//     newGameContainer.style.display= 'none';
//     categories.style.display= 'flex';
// })

// categoryButton.addEventListener('click', (event)=>{
//     categories.style.display= 'none';
//     gameContainer.style.display = 'flex';
// // })
// const categoryBtn = () =>{
//     console.log('siema eniu')
   
// }


const App = () =>{
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isDisplay, setIsDisplay] = useState(true)

  const currentQuestion = questions[questionIndex];

  const CategoryBtnClick = () => {
    setIsDisplay(!isDisplay)
  }

  
  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      console.log('dobra odpowiedź!');
    }
    else if (answer !== currentQuestion.correctAnswer){
      console.log('zła odpowiedź!')
    }
    setQuestionIndex(questionIndex + 1);
  };
  

    return <>
   
    <div style={{display: isDisplay ? "flex" : "none"}} className="category_container">
      <button onClick={CategoryBtnClick} className="category_container_button category_1">{currentQuestion.category}</button>
      <button onClick={CategoryBtnClick} className="category_container_button category_2">druga fajna kategoria</button>
    </div>


    <div style={{display: isDisplay ? "none" : "flex"}} className="game_container">

      <div className="game_container_question_counter">
        <div className="game_container_question_counter_element">1</div>
      </div>


      <div className="game_container_main">
        <div className="game_container_main_question"><h1>{currentQuestion.question}</h1></div>
        <div className="game_container_main_answears">


        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="game_container_main_answears_element">
            <div onClick={()=>handleAnswer(answer)} className="game_container_main_answears_element_answear">{answer}</div>
            <div className="game_container_main_answears_element_money">
              <div className="money_buttons">
                <button className="money_buttons_btn">+25k</button>
                <button className="money_buttons_btn">+50k</button>
                <button className="money_buttons_btn">+100k</button>
                <button className="money_buttons_btn">All</button>
              </div>
              <div className="game_container_main_answears_element_money_added">0</div>
            </div>
          </div>
        ))}

          
        </div>
      </div>
      
      <div className="game_container_money_container"></div>
    </div>
</>
}

root.render(<App />);