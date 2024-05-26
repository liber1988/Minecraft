import { World } from "./world.js";
const world = new World();

export class Game {
  world = world;
  constractor() {}

  startGame() {
    world.generateWorld();
    world.addKitTools();
    world.createUtilities();
  }
  updateWorld() {
    document.body.addEventListener("click", () => {
      world.removeTile();
      world.addTile();
    });
  }
  resetGame() {}
}
