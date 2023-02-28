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

let values = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPlayer = 1;
let isGameOver = false;

function placeOnBoard(index, element) {
  if (values[index] === 0) {
    values[index] = currentPlayer;
    element.innerText = currentPlayer === 1 ? "O" : "X";
    changePlayer();
  }
}

function changePlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
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
