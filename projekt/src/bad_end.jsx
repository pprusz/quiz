import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Bad = (props) =>{
    const counter = props.counter;
    const setCounter = props.setCounter;
    const gameTime = props.gameTime;
    const setInputValue = props.setInputValue;
    const questionIndex= props.questionIndex;
    console.log(questionIndex)


    const resetCounter = () => {
        setCounter(1)
        setInputValue('')
    }



    return <>

    <div className="bad_end">
        <h1 className="bad_end_title">Przegrana!</h1>
        <h1 className="bad_end_description">Odpadłeś na pytaniu: {counter}</h1>
        <h1 className="bad_end_description">Twój czas gry to: {gameTime}s</h1>


        <Link to="/">
            <button onClick={resetCounter} className="bad_end_button">Spróbuj zagrać ponownie</button>
        </Link>

        <Link to="/rank">
            <button onClick={resetCounter}  className="new_game_rank">Ranking</button>
        </Link>
    
    </div>
            
    </>
}



export {Bad}