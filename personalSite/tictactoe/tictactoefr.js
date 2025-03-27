let currentPlayer = 'X'; // Player X starts
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Empty game board
let gameOver = false;

// Update the board UI
function updateBoard() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square, index) => {
    square.textContent = gameBoard[index];
  });
}

// Handle a player's move
function handleMove(index) {
  if (gameOver || gameBoard[index] !== '') return; // Ignore if the square is already filled or the game is over
  
  gameBoard[index] = currentPlayer;
  updateBoard();
  
  if (checkWin()) {
    document.getElementById('message').textContent = `${currentPlayer} wins!`;
    gameOver = true;
  } else if (gameBoard.every(cell => cell !== '')) {
    document.getElementById('message').textContent = "It's a tie!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
  }
}

// Check if there is a winner
function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical wins
    [0, 4, 8], [2, 4, 6]             // Diagonal wins
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

// Reset the game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  document.getElementById('message').textContent = '';
  updateBoard();
}

// Attach event listeners to squares
document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square, index) => {
    square.addEventListener('click', () => handleMove(index));
  });

  // Reset button listener
  document.getElementById('reset-btn').addEventListener('click', resetGame);
});
// Firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyBWxUw3Oz_xBm_zuqFr48PD1CIIZ-AoXMM",
  authDomain: "group-game-library.firebaseapp.com",
  projectId: "group-game-library",
  storageBucket: "group-game-library.firebasestorage.app",
  messagingSenderId: "988650785210",
  appId: "1:988650785210:web:2fc121ad5c647720e7f583",
  measurementId: "G-RR5S8WD000"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
async function handleWin(player) {
  const initials = prompt(`${player} wins! Enter your initials:`).toUpperCase();
  if (initials) {
    const scoreRef = db.collection("highScores").doc(initials);
    try {
      await scoreRef.set(
        {
          initials: initials,
          wins: firebase.firestore.FieldValue.increment(1)
        },
        { merge: true }  // Merge ensures it updates the existing count
      );
      alert(`Score updated for ${initials}!`);
    } catch (error) {
      console.error("Error updating score: ", error);
    }
  }
}