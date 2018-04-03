var signX = 'X';
var signO = 'O';
var signR = '-';

var player = [signX,signO];
var current_player = player[0];
var players_names = []
var board = [[signR,signR,signR],
             [signR,signR,signR],
             [signR,signR,signR]];


const resetGame = () => {
   player = [signX,signO];
   current_player = player[0];

   board = [[signR,signR,signR],
               [signR,signR,signR],
               [signR,signR,signR]];
  for(var i = 0; i < 3; i++){
    for (var j = 0; j < 3 ; j++){
      document.getElementById(`row${i}-col${j}`).innerHTML = signR;
    }
  }
}


const modifyBoard = (xy) => {
  // let xy = [selected.slice(3,4), selected.slice(8,9)]
  if(board[xy[0]][xy[1]] !== '-') {
    alert("Can't Do that !")
  } else {
    board[xy[0]][xy[1]] = current_player;
    document.getElementById(`row${xy[0]}-col${xy[1]}`).innerHTML = current_player;
    checkWin();
    current_player = player.reverse()[0];
  }
}

const gameOver = () => {
  let count = 0;
   board.forEach((el) => {
     el.forEach((el2)=> {
      if (el2 !== signR)
      count += 1;
      console.log(count);
    })
  })
  return count === 9;
}

const checkWin = () => {

  console.log("check");

  board.forEach((row) => {
    // row win
    if((row[0] === row[1]) && (row[0] === row[2]) && row[0] !== signR && row[1] !== signR ){

      alert(`${current_player} won`);
      resetGame();
    }
  }); // cols win
  if(((board[0][0]) === board[1][0]) && ((board[0][0]) === board[2][0]) && (board[0][0] !== signR )&& (board[1][0] !== signR)){
    alert(`${current_player} won`);
    resetGame();
  }
  else if(((board[0][1]) === board[1][1]) && ((board[0][1]) === board[0][2]) && (board[0][1] !== signR )&& (board[1][1] !== signR)){
    alert(`${current_player} won`);
    resetGame();

  } else if (((board[0][2]) === board[1][2]) && ((board[0][2]) === board[2][2]) && (board[0][2] !== signR )&& (board[1][2] !== signR)){
    alert(`${current_player} won`);
    resetGame();

  } else if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && board[0][0] !== signR) {
    alert(`${current_player} won`);
    resetGame();

  } else if ((board[0][2] === board[1][1]) && (board[2][0] === board[1][1]) && board[1][1] !== signR) {
    alert(`${current_player} won`);
    resetGame();
  } else if (gameOver()) {
      alert("TIE");
      resetGame();
    }

}



document.addEventListener("DOMContentLoaded", function(event) {
    //Do work
    document.getElementById('tab').addEventListener("click", (e) => {modifyBoard([parseInt(e.target.id.slice(3,4)),parseInt(e.target.id.slice(8,9))])});
    document.getElementById("reset").addEventListener("click", () => {resetGame()});
});
