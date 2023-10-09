let turn = "X";
const cells = document.getElementsByClassName("gridItem");

function winChecker(i, marking) {
    let gameOver = false;
    // horizontal wins
        if (cells[0].textContent == marking && cells[1].textContent == marking && cells[2].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        } else if (cells[3].textContent == marking && cells[4].textContent == marking && cells[5].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        } else if (cells[6].textContent == marking && cells[7].textContent == marking && cells[8].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;

            // vertical wins
        } else if (cells[0].textContent == marking && cells[3].textContent == marking && cells[6].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        } else if (cells[1].textContent == marking && cells[4].textContent == marking && cells[7].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        } else if (cells[2].textContent == marking && cells[5].textContent == marking && cells[8].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        }

        // checking for diagonal wins
        else if (cells[0].textContent == marking && cells[4].textContent == marking && cells[8].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        } else if (cells[2].textContent == marking && cells[4].textContent == marking && cells[6].textContent == marking) {
            alert(marking + " has won!");
            gameOver = true;
        }

        if (gameOver) {
            for(let i = 0; i < cells.length; i++) {
                cells[i].textContent = "";
            }
        }
}

function addMark(place, i){
    return function () {
        if (turn == "X") {
            place.innerHTML += "X"
            winChecker(i, turn);
            turn = "O";
        } else {
            place.innerHTML += "O"
            winChecker(i, turn);
            turn = "X";
        }

    }
}



for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", addMark(cells[i], i));
}




/**
 *  11
12
13

21
22
23

 * */ 