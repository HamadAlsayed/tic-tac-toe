const Gameboard = (() => {
    const board = [];
    const rows = 3;
    const columns = 3;
    
    // A for loop iterates over the board array and
    // creates an array for every x number of rows
    // So each element in the array is itself an array
    for (i = 0; i < rows; i++) {
        board[i] = [];
        
        for (j = 0; j < columns; j++) {
            board[i].push('');
        }
    }
    
    const getBoard = () => board;

    const placeMarker = (row, column, player) => {
        
    }

    const resetBoard = () => {

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