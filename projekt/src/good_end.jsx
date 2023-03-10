import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Good = () =>{



    return <>

    <div className="good_end">
        <h1 className="good_end_title">Gratulacje!</h1>
        <h1 className="good_end_description">Wygrałeś!</h1>
        <h1 className="good_end_description">Twój czas gry to: </h1>

        <Link to="/">
            <button className="good_end_button">Menu główne</button>
        </Link>

        <Link to="/rank">
            <button className="new_game_rank">Ranking</button>
        </Link>
    
    </div>
            
    </>
}



export {Good}