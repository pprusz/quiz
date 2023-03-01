import "../scss/main.scss"

const newGameContainer= document.querySelector('.new_game')
const startButton= document.querySelector('.new_game_button')
const categories= document.querySelector('.category_container')
const categoryButton = document.querySelector('.category_container_button')
const gameContainer = document.querySelector('.game_container')



startButton.addEventListener('click', (event)=>{
    newGameContainer.style.display= 'none';
    categories.style.display= 'flex';
})

categoryButton.addEventListener('click', (event)=>{
    categories.style.display= 'none';
    gameContainer.style.display = 'flex';
})