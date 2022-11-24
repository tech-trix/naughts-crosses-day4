// Make your changes to store and update game state in this file

let grid = [[null,null,null],[null,null,null],[null,null,null]];
let current_player = "nought";
let game_over = false;
const win_conditions = [
    [[0, 0], [0, 1], [0, 2]], // rows
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], // columns
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], // diagonals
    [[0, 2], [1, 1], [2, 0]],
];

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if (!game_over && !grid[row][column]) {
        grid[row][column] = current_player;
        if (current_player === "nought") {
            current_player = "cross";
        } else if (current_player === "cross") {
            current_player = "nought";
        }
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    // Only looking for one solution...
    for (solution of win_conditions) {
        // check the value at the position of the first item in the solution is non-empty
        // and check the value at the position of the first item matches the value at the position of the second item
        // and check the value at the position of the first item matches the value at the position of the third item
        const first = solution[0];
        const second = solution[1];
        const third = solution[2];
        console.log(solution[0])
        if (grid[first[0]][first[1]] && 
            grid[first[0]][first[1]] === grid[second[0]][second[1]] &&
            grid[first[0]][first[1]] === grid[third[0]][third[1]]) {
            game_over = true;
            if (grid[first[0]][first[1]] === "nought") {
                return "noughts";
            } else if (grid[first[0]][first[1]] === "cross") {
                return "crosses";
            }
        }
    }
    // Check if there are any available positions or if the game is a draw
    return grid.map(function (row) {
        return row.includes(null);
    }).includes(true) ? null : "nobody";
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    grid = [[null,null,null],[null,null,null],[null,null,null]];
    current_player = "nought";
    game_over = false;
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    console.log(grid)
    return grid;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
