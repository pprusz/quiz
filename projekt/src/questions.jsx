import React, {useState, useEffect} from "react";



const questions = [
    {   category: 'Sąsiedzi Polski',
        question: 'Które państwo graniczy z Polską na zachodzie?',
        answers: ['Niemcy', 'Litwa', 'Czechy', 'Słowacja'],
        correctAnswer: 'Niemcy',
      },
      { category: 'Stolica',
        question: 'Które miasto jest stolicą Włoch?',
        answers: [ 'Mediolan', 'Neapol', 'Rzym',  'Turyn'],
        correctAnswer: 'Rzym',
      },
      { category: 'Powierzchnia państwa',
        question: 'Które państwo jest największe pod względem powierzchni?',
        answers: [ 'Kanada','Rosja', 'Chiny', 'Argentyna'],
        correctAnswer: 'Rosja',
      },
      { category: 'Literatura',
        question: 'Który z tych autorów napisał "Lalkę"?',
        answers: ['Bolesław Prus', 'Henryk Sienkiewicz', 'Adam Mickiewicz', 'Juliusz Słowacki'],
        correctAnswer: 'Bolesław Prus',
      },
      { category: 'Historia',
        question: 'Które państwo było przeciwnikiem Polski w wojnie polsko-bolszewickiej?',
        answers: ['Niemcy', 'Rosja', 'Francja', 'Austria'],
        correctAnswer: 'Rosja',
      },
      { category: 'Nauka',
        question: 'Jaki pierwiastek jest składnikiem chemii organicznej?',
        answers: ['Miedź', 'Węgiel', 'Żelazo', 'Srebro'],
        correctAnswer: 'Węgiel',
      },
      { category: 'Sztuka',
        question: 'Kto namalował obraz "Mona Lisa"?',
        answers: [ 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet','Leonardo da Vinci'],
        correctAnswer: 'Leonardo da Vinci',
      },
      { category: 'Muzyka',
        question: 'Który z tych zespołów nie jest z Wielkiej Brytanii?',
        answers: ['The Beatles', 'U2', 'Queen', 'AC/DC'],
        correctAnswer: 'AC/DC',
      },
      { category: 'Sport',
        question: 'Która dyscyplina sportu jest związana z okręgiem i ringiem?',
        answers: ['Boks', 'Skoki narciarskie', 'Piłka nożna', 'Koszykówka'],
        correctAnswer: 'Boks',
      },
      { category: 'Kuchnia',
        question: 'Z jakiego kraju pochodzi sushi?',
        answers: ['Japonia', 'Chiny', 'Korea', 'Wietnam'],
        correctAnswer: 'Japonia',
      },
]

export {questions}






// Kategoria: Film
// Pytanie: Który z tych filmów nie jest z serii "Gwiezdne wojny"?
// a) Gwiezdne wojny: Nowa nadzieja
// b) Gwiezdne wojny: Atak klonów
// c) Gwiezdne wojny: Ostatni Jedi
// d) Terminator
// Prawidłowa odpowiedź: d) Terminator

// Kategoria: Polityka
// Pytanie: Który kraj ma najwięcej ludności na świecie?
// a) Indie
// b) Chiny
// c) Stany Zjednoczone
// d) Rosja
// Prawidłowa odpowiedź: b) Chiny