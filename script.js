const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = "X";
function renderBoard() {
    const allBoxes = document.querySelectorAll(".box");
    console.log(allBoxes);

    // [box1, box2,box3,box4,box5,box6,box7,box8,box9]

    allBoxes.forEach((boxElement, i) => {
        if (board[i] == "O") {
            boxElement.innerHTML = '<img src= "letter-o.png" height="40px"/>';
        }
        else if (board[i] == "X") {
            boxElement.innerHTML = '<img src= "close.png" height="40px"/>';
        }
        else {
            boxElement.innerHTML = ""
        }
    });
}
renderBoard();

function selectBox(boxNumber) {
    if (board[boxNumber] !== -1) {
        alert("Invalid Move");
        return;
    }
    board[boxNumber] = currentPlayer;
    renderBoard();

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;

    checkforwinner();
}
function resetBoard() {
    board.fill(-1);
    renderBoard();

    currentPlayer = "X";
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
}

function isPlayerPresent(place, player) {
    let result = true;
    //places = [0,1,2]
    //player = "X" or "O"
   

    place.forEach((place) => {
        if (board[place] != player) {
            result = false;
        }

    });
    return result;
}

function checkforwinner() {
    /*
    winning positions:
    0,1,2
    3,4,5
    6,7,8
    0,4,8
    2,4,6
    0,3,6
    1,4,7
    2,5,8
    */

    if (isPlayerPresent([0, 1, 2], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([3, 4, 5], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([6, 7, 8], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([0, 4, 8], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([2, 4, 6], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([0, 3, 6], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([1, 4, 7], "X")) {
        alert('Player X wins');
    }
    else if (isPlayerPresent([2, 5, 8], "X")) {
        alert('Player X wins');
    }

    if (isPlayerPresent([0, 1, 2], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([3, 4, 5], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([6, 7, 8], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([0, 4, 8], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([2, 4, 6], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([0, 3, 6], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([1, 4, 7], "O")) {
        alert('Player O wins');
    }
    else if (isPlayerPresent([2, 5, 8], "O")) {
        alert('Player O wins');
    }

    isPlayerPresent();
}
