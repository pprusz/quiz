import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questions";
import { createClient } from '@supabase/supabase-js'



const Buttons= (props)=>{
    const counter = props.counter;
    const setCounter = props.setCounter;
    const questionIndex = props.questionIndex;
    const setQuestionIndex = props.setQuestionIndex;
    const showModal = props.showModal;
    const setShowModal = props.setShowModal;
    const currentQuestion = props.currentQuestion;
    const setCurrentQuestion = props.setCurrentQuestion;
    const publicDisabled = props.publicDisabled;
    const setPublicDisabled = props.setPublicDisabled;
    const disabledIndexes = props.disabledIndexes;
    const setDisabledIndexes = props.setDisabledIndexes
    const gameTime = props.gameTime;
    const inputValue = props.inputValue;

    const navigate = useNavigate();
    const supabaseUrl = 'https://dehmyekrfcbhlxbssoab.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaG15ZWtyZmNiaGx4YnNzb2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MDk4NTgsImV4cCI6MTk5NDI4NTg1OH0.ajRYXXQ9TWXGDsZEtokByz4nhMNFcfGL4Y_aZWEFsr8'
    const supabase = createClient(supabaseUrl, supabaseKey)



    const [fiftyDisabled, setFiftyDisabled] = useState(false);
    const [changeDisabled, setChangeDisabled] = useState(false);
    

    const handleAnswerCheck = () => {
      const saveName = async () => {
        try {
            const { data, error } = await supabase
                .from('users')
                .insert([
                    { user_name: inputValue, game_time: gameTime }
                  ]);
            if (error) {
                throw error;
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
        if (currentQuestion.correctAnswer === currentQuestion.currentAnswer) {
          setCounter(counter + 1);
          if (counter >= questions.length - 1) {
            navigate("/good");
            saveName()
          } else {
            const disabledElements = document.querySelectorAll(".disabled");
            disabledElements.forEach(element => element.classList.remove("disabled"));
            setQuestionIndex(questionIndex + 1);
            setCurrentQuestion(questions[questionIndex + 1]);
          }
        } else {
          navigate("/bad");
        }
        setDisabledIndexes([]);
      
      };

      const handle50Click = () => {
        const correctAnswerIndex = currentQuestion.answers.findIndex(
          (answer) => answer === currentQuestion.correctAnswer
        );
        const allAnswersIndexes = currentQuestion.answers.map((_, index) => index);
        let wrongAnswerIndexes = allAnswersIndexes.filter(index => index !== correctAnswerIndex);
        const randomIndex1 = wrongAnswerIndexes[Math.floor(Math.random() * wrongAnswerIndexes.length)];
        wrongAnswerIndexes = wrongAnswerIndexes.filter((index) => index !== randomIndex1);
        const randomIndex2 = wrongAnswerIndexes[Math.floor(Math.random() * wrongAnswerIndexes.length)];
        wrongAnswerIndexes = wrongAnswerIndexes.filter((index) => index !== randomIndex2);
        wrongAnswerIndexes = [randomIndex1, randomIndex2];
        setDisabledIndexes(wrongAnswerIndexes);
        setFiftyDisabled(prevState => true);
      };

      
      const handleChangeClick = () => {
        if (questionIndex < questions.length - 1) {
          setCurrentQuestion(questions[questionIndex + 1]);
          setQuestionIndex(questionIndex + 1);
          setChangeDisabled(prevState => true);
        }
      };

     
    const handlePublicClick = () => {
      setShowModal(true);
    };

    


    return <div className="game_container_buttons">

        <div className="game_container_buttons_help">

          <button disabled={fiftyDisabled} onClick={handle50Click} className="game_container_buttons_help_fifty">
            50:50
            <span className="tooltip">Usuń dwie błędne odpowiedzi</span>
            </button>

          <button disabled={publicDisabled} onClick={handlePublicClick} className="game_container_buttons_help_public">
            <span className="fas fa-user"></span>
            <span className="tooltip">Zapytaj publiczność</span>
            </button>

          

          <button disabled={changeDisabled} onClick={handleChangeClick} className="game_container_buttons_help_change">
            <span className="fas fa-arrow-right"></span>
            <span className="tooltip">Zmień pytanie</span>
            </button>

        </div>

        <div className="game_container_buttons_check">
          <button  onClick={handleAnswerCheck} className="game_container_buttons_check_button">Sprawdź odpowiedź</button>
        </div>
      </div>
}


export {Buttons}