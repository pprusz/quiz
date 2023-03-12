import "../scss/main.scss";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';


import { NewGame } from "./new_game";
import { Bad } from "./bad_end";
import { MainGame } from "./main_game";
import { Rank } from "./rank";
import { Good } from "./good_end";



const container = document.querySelector('.app')
const root = createRoot(container)


const App = () => {
  const [counter, setCounter] = useState(1);
  const [gameQuestions, setGameQuestions] = useState();

 


  return <>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<NewGame/>} />
        <Route path="/bad" element={<Bad counter={counter} setCounter={setCounter}/>}/>
        <Route path="/game" element={<MainGame counter={counter} setCounter={setCounter}/>} />
        <Route path="/rank" element={<Rank/>} />
        <Route path="/good" element={<Good counter={counter} setCounter={setCounter}/>}/>
      </Routes>
    </HashRouter>


  </>
}

root.render(<App />);

















// const [questionIndex, setQuestionIndex] = useState(0);
// const [isDisplay, setIsDisplay] = useState(true);
// const [isDisplayCategory, setIsDisplayCategory] = useState(true);
// const [counter, setCounter] = useState(1)
// const currentQuestion = questions[questionIndex];



// useEffect(() => {
//   const selectQuestions = () => {
//     const selected = [];
//     while (selected.length < 5) {
//       const index = Math.floor(Math.random() * questions.length);
//       const question = questions[index];
//       if (!selected.includes(question)) {
//         selected.push(question);
//       }
//     }
//     setGameQuestions(selected);
//   };
//   selectQuestions();
// }, []);


// const CategoryBtnClick = (event) => {
//   setIsDisplay(!isDisplay);
// }


// const CategoryBtnClickCategory = (event) => {
//   setIsDisplayCategory(!isDisplayCategory);
// }



// const handleAnswer = (answer) => {
//   if (answer === currentQuestion.correctAnswer) {
//     console.log('dobra odpowiedź!');
//   }
//   else if (answer !== currentQuestion.correctAnswer) {
//     console.log('zła odpowiedź!')
//   }
//   setQuestionIndex(questionIndex + 1);
//   setCounter(counter + 1);
// };
