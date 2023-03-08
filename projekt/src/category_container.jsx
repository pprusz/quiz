import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Category = (gameQuestion) =>{



    return <>


    <div className="category_container">
        <Link to="/game">
            {questions.map((quest,index)=>{
                <button key={index}>{quest.category}</button>
            })}
            {/* <button  className={`category_container_button`}>{gameQuestion[0].category}</button> */}
        </Link>
    </div>
            
    </>
}



export {Category}