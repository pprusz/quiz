import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Rank = () =>{



    return <>

    <div className="rank">
        <h1 className="rank_title">RANKING</h1>
        <table className="rank_table"></table>
        <Link to={'/'}>
            <button className='rank_button'>Powrót do menu głównego</button>
        </Link>

    </div>
            
    </>
}



export {Rank}