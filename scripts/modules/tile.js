import TilesModels from "../models/tiles-models.js";

export default class Tile {
  constructor(active_status, element, x, y) {
    this.active_status = active_status;
    this.type = element;
    this.x = x;
    this.y = y;
  }
}
