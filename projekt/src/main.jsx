import "../scss/main.scss";

import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";

const container = document.querySelector('.app')

const root = createRoot(container)


const newGameContainer= document.querySelector('.new_game');
const startButton= document.querySelector('.new_game_button');
const categories= document.querySelector('.category_container');
const categoryButton = document.querySelector('.category_container_button');
const gameContainer = document.querySelector('.game_container');



// startButton.addEventListener('click', (event)=>{
//     newGameContainer.style.display= 'none';
//     categories.style.display= 'flex';
// })

// categoryButton.addEventListener('click', (event)=>{
//     categories.style.display= 'none';
//     gameContainer.style.display = 'flex';
// })
const newGameBtn = () =>{
    // newGameContainer.style.display= 'none';
    // categories.style.display= 'flex';
    // console.log('siema eniu')
}


const App = () =>{
    return <>
    <div className="new_game">
      <button onClick={newGameBtn} className="new_game_button">Rozpocznij nową gre!</button>
    </div>
   
    <div className="category_container">
      
      <button className="category_container_button category_1"><h1>coś tam jakaś kategoria</h1></button>
      <button className="category_container_button category_2">Marki samochodów</button>
    </div>


    <div className="game_container">

      <div className="game_container_question_counter">
        <div className="game_container_question_counter_element">1</div>
        <div className="game_container_question_counter_element">2</div>
        <div className="game_container_question_counter_element">3</div>
        <div className="game_container_question_counter_element">4</div>
        <div className="game_container_question_counter_element">5</div>
        <div className="game_container_question_counter_element">6</div>
        <div className="game_container_question_counter_element">7</div>
        <div className="game_container_question_counter_element">8</div>
      </div>


      <div className="game_container_main">
        <div className="game_container_main_question"><h1>pytanie z wybranej kategorii</h1></div>
        <div className="game_container_main_answears">

          <div className="game_container_main_answears_element">
            <div className="game_container_main_answears_element_answear"><h1>Odpowiedź</h1></div>
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

          <div className="game_container_main_answears_element">
            <div className="game_container_main_answears_element_answear"><h1>Odpowiedź</h1></div>
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
          
          <div className="game_container_main_answears_element">
            <div className="game_container_main_answears_element_answear"><h1>Odpowiedź</h1></div>
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

          <div className="game_container_main_answears_element">
            <div className="game_container_main_answears_element_answear"><h1>Odpowiedź</h1></div>
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

          
        </div>
      </div>
      
      <div className="game_container_money_container"></div>
    </div>
</>
}

root.render(<App />);