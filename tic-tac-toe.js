
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.querySelector("#status");

    let currentPlayer = "X";
    let gameOver = false;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function (square) {
        square.classList.add("square");

        square.addEventListener("click", function () {
            if (square.textContent !== "" || gameOver) {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            const winner = checkWinner();

            if (winner) {
                status.textContent =
                    "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
                gameOver = true;
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });
    });

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (
                squares[a].textContent !== "" &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                return squares[a].textContent;
            }
        }

        return null;
    }
});
