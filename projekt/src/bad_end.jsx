import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Bad = (props) =>{
    const counter = props.counter;
    const setCounter = props.setCounter;

    const resetCounter = () => {
        setCounter(1)
    }



    return <>

    <div className="bad_end">
        <h1 className="bad_end_title">Przegrana!</h1>
        <h1 className="bad_end_description">Odpadłeś na pytaniu: {counter}</h1>
        <h1 className="bad_end_description">Twój czas gry to: </h1>

        <Link to="/">
            <button onClick={resetCounter} className="bad_end_button">Spróbuj zagrać ponownie</button>
        </Link>

        <Link to="/rank">
            <button  className="new_game_rank">Ranking</button>
        </Link>
    
    </div>
            
    </>
}



export {Bad}