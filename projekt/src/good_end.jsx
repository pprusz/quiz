import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'



const Good = (props) =>{
    const counter = props.counter;
    const setCounter = props.setCounter;
    const gameTime = props.gameTime;
    const inputValue = props.inputValue;
    const setInputValue = props.setInputValue;

    const supabaseUrl = 'https://dehmyekrfcbhlxbssoab.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaG15ZWtyZmNiaGx4YnNzb2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MDk4NTgsImV4cCI6MTk5NDI4NTg1OH0.ajRYXXQ9TWXGDsZEtokByz4nhMNFcfGL4Y_aZWEFsr8'
    const supabase = createClient(supabaseUrl, supabaseKey)


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
            <button className="new_game_rank">Ranking</button>
        </Link>
    
    </div>
            
    </>
}



export {Good}