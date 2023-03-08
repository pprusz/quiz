import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Bad = () =>{



    return <>

    <div className="bad_end">
        <h1 className="bad_end_title">Przegrana!</h1>
        <h1 className="bad_end_description">Odpadłeś na pytaniu: </h1>
        <h1 className="bad_end_description">Twój czas gry to: </h1>

        <Link to="/">
            <button className="bad_end_button">Spróbuj zagrać ponownie</button>
        </Link>

        <Link to="/rank">
            <button className="new_game_rank">Ranking</button>
        </Link>
    
    </div>
            
    </>
}



export {Bad}