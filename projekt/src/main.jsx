import "../scss/main.scss";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

import { NewGame } from "./new_game";
import { Bad } from "./bad_end";
import { MainGame } from "./main_game";
import { Rank } from "./rank";
import { Good } from "./good_end";



const container = document.querySelector('.app')
const root = createRoot(container)


const App = () => {
  const [counter, setCounter] = useState(1);
  const [gameTime, setGameTime] = useState(0)
  const [inputValue, setInputValue] = useState('');
  

  
  const supabaseUrl = 'https://dehmyekrfcbhlxbssoab.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaG15ZWtyZmNiaGx4YnNzb2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MDk4NTgsImV4cCI6MTk5NDI4NTg1OH0.ajRYXXQ9TWXGDsZEtokByz4nhMNFcfGL4Y_aZWEFsr8'
  const supabase = createClient(supabaseUrl, supabaseKey)


 


  return <>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<NewGame inputValue={inputValue} setInputValue={setInputValue}/>} />
        <Route path="/bad" element={<Bad counter={counter} setCounter={setCounter} gameTime = {gameTime} setInputValue={setInputValue}/>}/>
        <Route path="/game" element={<MainGame counter={counter} setCounter={setCounter} gameTime={gameTime} setGameTime={setGameTime} inputValue= {inputValue}/>} />
        <Route path="/rank" element={<Rank supabase={supabase}/>} />
        <Route path="/good" element={<Good counter={counter} setCounter={setCounter} gameTime = {gameTime} inputValue={inputValue} setInputValue={setInputValue} supabase={supabase}/>}/>
      </Routes>
    </HashRouter>


  </>
}

root.render(<App />);