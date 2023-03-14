import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';



const NewGame = (props) =>{ 
    const inputValue= props.inputValue;
    const setInputValue= props.setInputValue;
     

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleClick = (event) => {
        if (inputValue === '') {
            event.preventDefault();
        }
    }

    return  <>
        <div className="new_game" >
            <h1 className="new_game_title">Witaj w grze!</h1>
            <input className="new_game_input" type="text" placeholder="Podaj swoje imię!" value={inputValue} onChange={handleInputChange}/>
            <Link to="/game">
                <button  className="new_game_button" onClick={handleClick} disabled={inputValue.length < 3}>Rozpocznij nową gre!</button>
            </Link>

            <Link to="/rank">
                <button className="new_game_rank">Ranking</button>
            </Link>
        </div>
    </>
}

export {NewGame}