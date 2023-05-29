import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Good = (props) =>{
    const counter = props.counter;
    const setCounter = props.setCounter;
    const gameTime = props.gameTime;
    const inputValue = props.inputValue;
    const setInputValue = props.setInputValue;
    const supabase = props.supabase;


    const resetCounter = () =>{
        setCounter(1);
        setInputValue('')
    }


    return <>
            <div className="good_end">
                <h1 className="good_end_title">Gratulacje!</h1>
                <h1 className="good_end_description">Wygrałeś!</h1>
                <h1 className="good_end_description">Twój czas gry to: {gameTime}s</h1>

                <Link to="/">
                    <button onClick={resetCounter} className="good_end_button">Menu główne</button>
                </Link>

                <Link to="/rank">
                    <button onClick={resetCounter} className="new_game_rank">Ranking</button>
                </Link>
            
            </div>      
            </>
}



export {Good}