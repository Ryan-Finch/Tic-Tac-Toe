//Constants
// const colors = {
//     null: 'var(--null)',
//     player1:  'var(--player1)',
//     player2: 'var(--player2)',
// };


const winConditions =[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [0,4,8]
];

const usedSquares = []

const board = [];

//Varialbles

let playerTurn;
let winLoseDraw;
let player1 = 1;
let player2 = -1;

//Cached Elements 
const squares = document.querySelectorAll('.box');
let message = document.querySelector('.message');
//Event Listener
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', squareSelection)
}

//Functions
init();

function init(){
    createBoard();
    turn();
    winner();
    render();
    }

function turn(){
    
    playerTurn = player1;


}

function winner(){
    winLoseDraw = null;
}

function createBoard() {

    for(let i = 0; i < squares.length; i++){
        board[i] = squares[i];
    }
}

function render(){
    
    if(winLoseDraw === null){
        message =  `It's ${playerTurn} turn`;   
    }else if(winLoseDraw === 'T'){
        message = `It's a tie game!`;
    }else{
        message = `Congrats ${playerTurn}! You have won!`
    }
    
}

function getWinner(){
    gameWon = null;
    for(let [index, win] of winConditions.entries()){
        if(win.every(elem => usedSquares.indexOf(elem > - 1))){
            console.log('hhhhhh')
        }
    }
            
    



}

function squareSelection(e){

    let target = document.querySelector('.box');
    
    if(e.target.style.background === 'red' || e.target.style.background === 'green'){
        return
    }

    if(winLoseDraw !== null){
        return
    }
    
    // console.log(target)
    if(playerTurn === player1){
        e.target.style.background = 'red';
        playerTurn = player2;
    }else{
        e.target.style.background= 'green';
        playerTurn = player1;
        }
    
     usedSquares.push(e.target.id);  
     
     
    getWinner();
    render();
}

