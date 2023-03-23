// Author: Moisés Adame-Aguilar
// Date: February 20, 2023
// Description: Functionality for Tic Tac Toe Game

let turn = 0
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

// Function that adds a token given it's type and position
function addToken(position, token){
    // Define the position of the token
    var squareId = 'main__cell' + (position + 1)
    
    // Define where the token is going to be placed.
    var box = document.getElementsByClassName(squareId)[0]

    // Define the element that will act as the token
    var imgToken = document.createElement('img')
    imgToken.setAttribute('class', 'img-token')

    if(token === 'X'){
        imgToken.setAttribute('alt', 'X in ' + squareId)
        imgToken.setAttribute('src', 'images/x.png')
        box.appendChild(imgToken)
        board[position] = 'X'
    }else if(token === 'O'){
        imgToken.setAttribute('alt', 'O in ' + squareId)
        imgToken.setAttribute('src', 'images/o.png')
        box.appendChild(imgToken)
        board[position] = 'O'
    }
}

// Function that given the box and turn, places a token.
function counter(position){
    if(!validateFinish(board)){
        var paragraph = document.getElementsByClassName('main__score__text')[0]
        if(turn % 2 === 0 && board[position] === ' '){
            addToken(position, 'X')
        }else if(turn % 2 !== 0 && board[position] === ' '){
            addToken(position, 'O')
        }else{
            turn--
        }
    }

    if(validateFinish(board)){
        setTimeout(reStart, 3000)
    }else{
        turn++
        if(turn === 9){
            paragraph.innerText = 'Tie'
            setTimeout(reStart, 3000)
        }else if(turn % 2 === 0){
            paragraph.innerText = 'X Turn.'
        }else if(turn % 2 !== 0){
            paragraph.innerText = 'O Turn.'
        }
    }
}

// Function that validates if someone has won.
function validateFinish(board){
    var result = ''
    var paragraph = document.getElementsByClassName('main__score__text')[0]
    if(board[0] === board[1] && board[0] === board[2] && board[0] !== ' ' ||
       board[3] === board[4] && board[3] === board[5] && board[3] !== ' ' ||
       board[6] === board[7] && board[6] === board[8] && board[6] !== ' ' ||
       board[0] === board[3] && board[0] === board[6] && board[0] !== ' ' ||
       board[1] === board[4] && board[1] === board[7] && board[1] !== ' ' ||
       board[2] === board[5] && board[2] === board[8] && board[2] !== ' ' ||
       board[0] === board[4] && board[0] === board[8] && board[0] !== ' ' ||
       board[2] === board[4] && board[2] === board[6] && board[2] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        paragraph.innerText = result
        return true
    }else {
        return false
    }
}

// Function that restarts the game
function reStart(){
    // Restarting the turn and board
    turn = 0
    board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    // Cleaning the teamplate board
    for(var i = 0; i < 9; i++){
        document.getElementsByClassName('main__cell' + (i + 1))[0].innerHTML = ''
    }
    document.getElementsByClassName('main__score__text')[0].innerText = 'X Turn.'
    console.log('Restarting...')
}