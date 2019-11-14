class Game {
   constructor() {
      this.won = false;
      this.currentPlayer = 'X';
      this.winner = '';
      this.board = [
         [0, 0, 0],
         [0, 0, 0],
         [0, 0, 0],
      ];
   }
   swapPlayer() {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
   }
   getBoard() {
      return this.board;
   }
   getGameState() {
      return this.won;
   }
   getCurrentPlayer() {
      return this.currentPlayer;
   }
   makeMove(row, col) {
      if (!this.won && this.board[row][col] === 0) {
         const num = this.currentPlayer === 'X' ? 1 : 2;
         this.board[row][col] = num;
         this.checkWon();
         this.swapPlayer();
      }
      return this.getBoard();
   }
   checkWon() {
      const winRegex = /1{3}|2{3}|1.{2}\n.1.\n.{2}1|2.{2}\n.2.\n.{2}2|1.{2}\n1.{2}\n1.{2}|2.{2}\n2.{2}\n2.{2}|.1.\n.1.\n.1.|.2.\n.2.\n.2.|.{2}1\n.{2}1\n.{2}1|.{2}2\n.{2}2\n.{2}2/;
      const boardStr = this.board.join('\n').replace(/,/g, '');
      const matches = boardStr.match(winRegex);
      if (matches) {
         this.won = true;
         this.winner = this.currentPlayer;
      }
      return this.won;
   }
}
// const cells = document.getElementsByTagName('td');
// const table = document.getElementsByTagName('table')[0];
// const gameStatus = document.getElementById('game-status');
// const game = new Game();

// // Event listeners
// table.addEventListener('click', e => handleClick(e));

// // Functions
// function handleClick(e) {
//    if (e.target.tagName === 'TD') {
//       const idArr = e.target.id.split(',');
//       const row = parseInt(idArr[0]);
//       const col = parseInt(idArr[1]);
//       game.makeMove(row, col);
//       paintBoard();
//    }
// }
// function paintBoard() {
//    const board = game.getBoard();
//    for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[0].length; j++) {
//          let letter = '';
//          if (board[i][j] === 1) {
//             letter = 'X';
//          } else if (board[i][j] === 2) {
//             letter = 'O';
//          }
//          cells[i * 3 + j].innerText = letter;
//       }
//    }
//    updateGameStatus();
// }
// function updateGameStatus() {
//    if (game.getGameState()) {
//       gameStatus.innerText = `Player ${game.winner} has won!`;
//    } else {
//       gameStatus.innerText = `It's player ${game.getCurrentPlayer()}'s turn`;
//    }
// }

// 2 , 2
// 0 1 2 3 4 5 6 7 8

// 0 1 2
// 3 + 0 => 3, 3+1 => 4, 3+2 => 5
// 6+ 0 => 6
