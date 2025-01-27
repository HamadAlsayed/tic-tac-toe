const Gameboard = (() => {
    const board = [];
    const rows = 3;
    const columns = 3;
    
    // A for loop iterates over the board array and
    // creates an array for every x number of rows
    // So each element in the array is itself an array
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(cell());
        }
    }
    
    const getBoard = () => board;

    const placeMarker = (row, column, player) => {
        if (board[row][column].getValue === 0) {
            board[row][column].addMarker(player);
        } else {
            console.log('Spot already taken!')
        }
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = cell();
            }
        }
    }

    return {getBoard, placeMarker, resetBoard};
    
})();

function GameController(
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            marker: 'x',
        },
        {
            name: playerTwoName,
            marker: 'o',
        }
    ];

}

function cell() {
    let value = 0

    const addMarker = (player) => {
        value = player;
    }

    const getValue = () => value;

    return {
        addMarker,
        getValue,
    };
}