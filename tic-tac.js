let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
const statusElement = document.getElementById('status');

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      return board[a];
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    return 'T';
  }

  return null;
}

function handleCellClick(cellIndex) {
  if (!gameActive || board[cellIndex] !== '') {
    return;
  }

  board[cellIndex] = currentPlayer;
  document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;

  const winner = checkWin();
  if (winner) {
    let statusText = '';
    if (winner === 'T') {
      statusText = "It's a tie!";
    } else {
      statusText = `Player ${winner} wins!`;
    }
    statusElement.textContent = statusText;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusElement.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusElement.textContent = `Player ${currentPlayer}'s turn`;

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}

statusElement.textContent = `Player ${currentPlayer}'s turn`;
