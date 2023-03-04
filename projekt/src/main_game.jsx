import React, {useEffect, useState} from "react";

const MainQuestion = () => {
    return <div className="game_container_main_question"><h1>pytanie z wybranej kategorii</h1></div>
}


const AnswearElement = () => {
    return      <div className="game_container_main_answears_element">
                    <div className="game_container_main_answears_element_answear"><h1>Odpowiedź</h1></div>
                    <div className="game_container_main_answears_element_money">
                        <div className="money_buttons">
                            <button className="money_buttons_btn">+25k</button>
                            <button className="money_buttons_btn">+50k</button>
                            <button className="money_buttons_btn">+100k</button>
                            <button className="money_buttons_btn">All</button>
                        </div>
                        <div className="game_container_main_answears_element_money_added">0</div>
                    </div>
                </div>
}





const MainAnswearsContainer = () => {
    return  <div className="game_container_main_answears">
                <AnswearElement/>
                <AnswearElement/>
                <AnswearElement/>
                <AnswearElement/>
            </div>
}

const MainGame = () =>{
    return  <div className="game_container_main">
                <MainQuestion/>
                <MainAnswearsContainer/>
            </div>
    }
export {MainGame}