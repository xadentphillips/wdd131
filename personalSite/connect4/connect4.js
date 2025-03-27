class Connect4 {
    constructor() {
        this.ROWS = 6;
        this.COLS = 7;
        this.board = this.createBoard();
        this.currentPlayer = 'R';
        this.gameOver = false;
        this.initGame();
    }

    createBoard() {
        return Array(this.ROWS).fill(null).map(() => Array(this.COLS).fill(null));
    }

    initGame() {
        this.renderBoard();
        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
        document.getElementById('reset').addEventListener('click', () => this.resetGame());
    }

    renderBoard() {
        const boardElement = document.getElementById('game-board');
        boardElement.innerHTML = '';
        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('click', () => this.handleCellClick(col));
                boardElement.appendChild(cell);
            }
        }
    }

    handleCellClick(col) {
        if (this.gameOver) return;

        for (let row = this.ROWS - 1; row >= 0; row--) {
            if (!this.board[row][col]) {
                this.board[row][col] = this.currentPlayer;
                this.updateBoard(row, col);
                if (this.checkWin(row, col)) {
                    this.gameOver = true;
                    this.updateStatus(`Player ${this.currentPlayer} wins!`);
                    return;
                }
                this.switchPlayer();
                this.updateStatus(`Player ${this.currentPlayer}'s turn`);
                return;
            }
        }
        this.updateStatus('Column is full!');
    }

    updateBoard(row, col) {
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add(this.currentPlayer === 'R' ? 'red' : 'yellow');
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'R' ? 'Y' : 'R';
    }

    checkWin(row, col) {
        return (
            this.checkDirection(row, col, 1, 0) || // Horizontal
            this.checkDirection(row, col, 0, 1) || // Vertical
            this.checkDirection(row, col, 1, 1) || // Diagonal down-right
            this.checkDirection(row, col, 1, -1)   // Diagonal down-left
        );
    }

    checkDirection(row, col, dx, dy) {
        let count = 1;
        count += this.countConsecutive(row, col, dx, dy);
        count += this.countConsecutive(row, col, -dx, -dy);
        return count >= 4;
    }

    countConsecutive(row, col, dx, dy) {
        let count = 0;
        let player = this.currentPlayer;
        for (let i = 1; i < 4; i++) {
            let r = row + i * dx;
            let c = col + i * dy;
            if (r >= 0 && r < this.ROWS && c >= 0 && c < this.COLS && this.board[r][c] === player) {
                count++;
            } else {
                break;
            }
        }
        return count;
    }

    updateStatus(message) {
        document.getElementById('status').textContent = message;
    }

    resetGame() {
        this.board = this.createBoard();
        this.currentPlayer = 'R';
        this.gameOver = false;
        this.renderBoard();
        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    }
}

const game = new Connect4();
