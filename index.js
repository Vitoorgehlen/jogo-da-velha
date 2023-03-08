/* Git Flow
 Abrir o terminal (Crtl+J) e rodar esses comandos
 ! Entre cada comando: "git status"
 Depois 'git add'                       Adiciona os arquivos e mudanças na história
 ! Se eu colocar 'git add .' eu adiciono tudo
 Depois 'git commit -m "Uma mensagem"'  Cria um ponto na história com a mensagem
 Depois 'git push'                      Publica no GitHub
*/

const squareZero = document.getElementById("zero");
const squareOne = document.getElementById("one");
const squareTwo = document.getElementById("two");
const squareThree = document.getElementById("three");
const squareFour = document.getElementById("four");
const squareFive = document.getElementById("five");
const squareSix = document.getElementById("six");
const squareSeven = document.getElementById("seven");
const squareEight = document.getElementById("eight");
const resetButton = document.getElementById("restart");
const scorePlayer1 = document.getElementById("scoreP1");
const scorePlayer2 = document.getElementById("scoreP2");
const strikeVerHor = document.getElementById("strike");
const strikeDiagonal = document.getElementById("strike-diagonal");
const robot = document.getElementById("robot");

let values = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPlayer = 1;
let isGameOver = false;
let winner = 0;
let player1Wins = 0;
let player2Wins = 0;
let playerOnePiece = '<i class="player1 fa-solid fa-x"></i>';
let playerTwoPiece = '<i class="player2 fa-solid fa-o"></i>';
let isCPU = false;

function placeOnBoard(index, element) {
  if (!isGameOver) {
    if (values[index] === 0) {
      values[index] = currentPlayer;
      element.innerHTML = currentPlayer === 1 ? playerOnePiece : playerTwoPiece;
      winningMoves();
      scoreWinner();
      changePlayer();

      if (!values.includes(0)) {
        isGameOver = true;
      } else {
        setTimeout(() => {
          if (isCPU) {
            robotMove();
          }
        }, 250);
      }
    }
  }
}

function robotMove() {
  if (currentPlayer === 2) {
    let position = Math.round(Math.random() * 8);
    while (values[position] !== 0) {
      position = Math.round(Math.random() * 8);
    }
    switch (position) {
      case 0:
        placeOnBoard(position, squareZero);
        break;
      case 1:
        placeOnBoard(position, squareOne);
        break;
      case 2:
        placeOnBoard(position, squareTwo);
        break;
      case 3:
        placeOnBoard(position, squareThree);
        break;
      case 4:
        placeOnBoard(position, squareFour);
        break;
      case 5:
        placeOnBoard(position, squareFive);
        break;
      case 6:
        placeOnBoard(position, squareSix);
        break;
      case 7:
        placeOnBoard(position, squareSeven);
        break;
      case 8:
        placeOnBoard(position, squareEight);
        break;
      default:
        break;
    }
  }
}

function changePlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
    resetButton.classList.remove("player1");
    resetButton.classList.add("player2");
  } else {
    currentPlayer = 1;
    resetButton.classList.remove("player2");
    resetButton.classList.add("player1");
  }
}

function resetGame() {
  squareZero.innerText = "";
  squareOne.innerText = "";
  squareTwo.innerText = "";
  squareThree.innerText = "";
  squareFour.innerText = "";
  squareFive.innerText = "";
  squareSix.innerText = "";
  squareSeven.innerText = "";
  squareEight.innerText = "";
  values = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentPlayer = 1;
  isGameOver = false;
  winner = 0;
  strikeVerHor.removeAttribute("class");
  strikeDiagonal.removeAttribute("class");
  resetButton.classList.remove("player2");
  resetButton.classList.add("player1");
}

function winningMoves() {
  if (values[0] === values[3] && values[0] === values[6] && values[0] !== 0) {
    winner = currentPlayer;
    strikeVerHor.classList.add("one-vertical");
  }
  if (values[1] === values[4] && values[1] === values[7] && values[1] !== 0) {
    winner = currentPlayer;
    strikeVerHor.classList.add("two-vertical");
  }
  if (values[2] === values[5] && values[8] === values[2] && values[2] !== 0) {
    winner = currentPlayer;
    strikeVerHor.classList.add("three-vertical");
  }
  if (values[0] === values[1] && values[0] === values[2] && values[0] !== 0) {
    winner = currentPlayer;
    strikeVerHor.classList.add("one-horizontal");
  }
  if (values[3] === values[4] && values[3] === values[5] && values[3] !== 0) {
    winner = currentPlayer;
    strikeVerHor.classList.add("two-horizontal");
  }
  if (values[6] === values[7] && values[6] === values[8] && values[6] !== 0) {
    winner = currentPlayer;
    strikeVerHor.classList.add("three-horizontal");
  }
  if (values[6] === values[4] && values[6] === values[2] && values[6] !== 0) {
    winner = currentPlayer;
    strikeDiagonal.classList.add("two-diagonal");
  }
  if (values[0] === values[4] && values[0] === values[8] && values[0] !== 0) {
    winner = currentPlayer;
    strikeDiagonal.classList.add("one-diagonal");
  }

  if (winner > 0) {
    isGameOver = true;
  }
}

function scoreWinner() {
  if (winner === 1) {
    player1Wins = player1Wins + 1;
    scorePlayer1.innerText = player1Wins;
    strikeDiagonal.classList.add("player1");
    strikeVerHor.classList.add("player1");
  }
  if (winner === 2) {
    player2Wins = player2Wins + 1;
    scorePlayer2.innerText = player2Wins;
    strikeDiagonal.classList.add("player2");
    strikeVerHor.classList.add("player2");
  }
}

squareZero.addEventListener("click", () => {
  placeOnBoard(0, squareZero);
});
squareOne.addEventListener("click", () => {
  placeOnBoard(1, squareOne);
});
squareTwo.addEventListener("click", () => {
  placeOnBoard(2, squareTwo);
});
squareThree.addEventListener("click", () => {
  placeOnBoard(3, squareThree);
});
squareFour.addEventListener("click", () => {
  placeOnBoard(4, squareFour);
});
squareFive.addEventListener("click", () => {
  placeOnBoard(5, squareFive);
});
squareSix.addEventListener("click", () => {
  placeOnBoard(6, squareSix);
});
squareSeven.addEventListener("click", () => {
  placeOnBoard(7, squareSeven);
});
squareEight.addEventListener("click", () => {
  placeOnBoard(8, squareEight);
});
resetButton.addEventListener("click", () => {
  resetGame();
});
robot.addEventListener("click", () => {
  isCPU = !isCPU;
  if (isCPU) {
    robot.classList.add("active");
  } else {
    robot.classList.remove("active");
  }
  if (currentPlayer === 2) {
    robotMove();
  }
});
