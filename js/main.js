// Constants
const colors = {
    'null': 'var(--null)',
    '1':  'var(--player1)',
    '-1': 'var(--player2)',
};


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

//Varialbles
let board = [];
let playerTurn;
let winLoseDraw;
//Cached Elements 
const squares = document.querySelectorAll('.box');
let message = document.querySelector('#message');
//Event Listener
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', squareSelection)
};
 document.querySelector('button').addEventListener('click', init);



//Functions
init();
function init(){
    board = Array(9).fill(null);
    playerTurn = 1;
    winLoseDraw = null;
    render();
}

function winner(){
    for(let i = 0; i < winConditions.length; i++){
        if(Math.abs(board[winConditions[i][0]] + board[winConditions[i][1]] + board[winConditions[i][2]]) === 3){
            return board[winConditions[i][0]]
        }
    }
    if(board.includes(null)){
        return null
    }else{
        return 'T'
    }

}

function render(){

    console.log(winLoseDraw)
    board.forEach(function(sqr, i){
        squares[i].style.background = colors[sqr];
   })
    
   if(winLoseDraw === null) {
        return message.innerHTML =`It's Player ${playerTurn} turn`
    }
    
    if(winLoseDraw === 'T') {
        return message.innerHTML =`It's a Tie! Play again!`
    }

    if(winLoseDraw === 1){
        return message.innerHTML = 'YO DAWG! You won this shit!'
    }else if(winLoseDraw === -1){
            return message.innerHTML = 'You get a win and you get a win!'
        }
    
    
    // return message.innerHTML = `Congrats Player ${winLoseDraw}! You win!`
}

function squareSelection(evt){
    
    let move = parseInt(evt.target.id.replace('sq', ''));

    console.log(playerTurn)

    if(board[move] !== null) return
    


    if(winLoseDraw !== null)return
        
    board[move] = playerTurn;  
    winLoseDraw = winner();
    playerTurn *= -1
    render();

}