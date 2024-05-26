import { World } from "./world.js";
const world = new World();

export class Game {
  world = world;
  constractor() {}

  startGame() {
    world.generateWorld();
    world.addKitTools();
    world.createUtilities();
    world.createResetIcon();
  }
  resetGame() {
    const resets = document.getElementsByClassName("reset-icon");
    Array.from(resets).forEach((reset) => {
      reset.addEventListener("click", () => {
        location.reload();
      });
    });
  }
  updateWorld() {
    document.body.addEventListener("click", () => {
      world.removeTile();
      world.addTile();
    });
  }
}
