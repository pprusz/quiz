import React, {useState, useEffect} from "react";



const questions = [
    {   category: 'Sąsiedzi Polski',
        question: 'Które państwo graniczy z Polską na zachodzie?',
        answers: ['Niemcy', 'Litwa', 'Czechy', 'Słowacja'],
        correctAnswer: 'Niemcy',
      },
      { category: 'Stolica',
        question: 'Które miasto jest stolicą Włoch?',
        answers: ['Rzym', 'Mediolan', 'Neapol'],
        correctAnswer: 'Rzym',
      },
      { category: 'Powierzchnia państwa',
        question: 'Które państwo jest największe pod względem powierzchni?',
        answers: ['Rosja', 'Kanada', 'Chiny'],
        correctAnswer: 'Rosja',
      },
]

export {questions}