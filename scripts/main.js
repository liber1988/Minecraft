import { Game } from "./modules/game.js";

const startButton = document.querySelector(".start-button");
const gameStartContainer = document.querySelector(".game-start-scene");
startButton.addEventListener("click", function () {
  gameStartContainer.classList.add("hidden");
});

const game = new Game();
game.startGame();
game.resetGame();
game.updateWorld();
