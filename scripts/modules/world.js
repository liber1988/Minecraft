const matrixContainer = document.querySelector(".game-matrix");
const tools = document.querySelector(".tools");

import tilesDictionary from ".././models/tiles-models.js";
import toolsDictionary from ".././models/tools-models.js";
import { createStartTemplate } from "../models/tiles-init-state.js";
const STARTING_TEMPLATE = createStartTemplate();
import Tile from "./tile.js";
import Tool from "./tool.js";
import typesMatrixesMatch from "../models/typesMatrixesMatch.js";
import Utility from "./utilities.js";

export class World {
  typesMatrixesMatch = typesMatrixesMatch;
  matrixContainer = matrixContainer;
  tools = tools;
  STARTING_TEMPLATE = STARTING_TEMPLATE;
  toolsDictionary = toolsDictionary;
  constructor() {
    this.utilities_matrix = [];
    this.tiles_matrix = [];
    this.tools_matrix = [];
    this.tile_not_active = "not active";
    this.tool_not_active = "not active";
    this.tile_active = " active";
    this.tool_active = " active";
  }

  generateWorld() {
    for (let row_i = 0; row_i < 20; row_i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");
      const row_matrix = [];
      for (let col_j = 0; col_j < 40; col_j++) {
        const tile_matrix = new Tile(
          this.tile_not_active,
          STARTING_TEMPLATE[row_i][col_j],
          row_i,
          col_j
        );
        row_matrix.push(tile_matrix);
        const tile = document.createElement("div");
        const id = this.defineTileCordinatesID(row_i, col_j);
        tile.id = id;
        tile.classList.add("tile");
        tile.classList.add(STARTING_TEMPLATE[row_i][col_j]);
        row.appendChild(tile);
      }
      matrixContainer.appendChild(row);
      this.tiles_matrix.push(row_matrix);
    }
  }
  createUtilities() {
    const utilities = document.createElement("div");
    utilities.classList.add("utilities");
    // utilities.classList.add("hidden");
    tools.appendChild(utilities);
    let i = 0;
    for (let [key, type] of Object.entries(tilesDictionary)) {
      const utility_matrix = new Utility(type, this.tool_not_active);
      this.utilities_matrix.push(utility_matrix);
      const utility = document.createElement("div");
      utility.id = i;
      utility.textContent = this.utilities_matrix[i].number;
      utility.style.color = "white";
      utility.classList.add(type);
      utility.classList.add("utility-cell");
      utilities.appendChild(utility);
      i++;
    }
  }

  addUtility(tileType) {
    const utility = document.querySelector(`.${tileType}.utility-cell`);

    const index = utility.id;
    this.utilities_matrix[index].addItem();
    utility.textContent = this.utilities_matrix[index].number;
  }
  addTile() {
    this.activeTile();
    this.activeUtility();
    const tileActiveObject = this.returnActiveTile();
    const utilityActiveObject = this.returnActiveUtility();
    const id = this.defineTileCordinatesID(
      tileActiveObject.x,
      tileActiveObject.y
    );
    console.log(utilityActiveObject);
    if (utilityActiveObject) {
      const tile = document.getElementById(id);
      if (tileActiveObject.type != utilityActiveObject.type) {
        tile.classList.remove(tileActiveObject.type);
        tile.classList.add(utilityActiveObject.type);
        utilityActiveObject.removeItem();
        const utility = document.querySelector(
          `.${utilityActiveObject.type}.utility-cell`
        );
        utility.textContent = utilityActiveObject.number;
        tileActiveObject.type = utilityActiveObject.type;
      }
    }

    this.deActiveUtility();
    this.deActiveTile();
  }

  removeTile() {
    this.activeTile();
    this.activeTool();
    const tileActiveObject = this.returnActiveTile();
    const toolActiveObject = this.returnActiveTool();

    const array = [];
    if (toolActiveObject) {
      array.push(toolActiveObject.type);
    }
    if (tileActiveObject) {
      array.push(tileActiveObject.type);
    }

    if (this.checkTheMatch(array)) {
      const id = this.defineTileCordinatesID(
        tileActiveObject.x,
        tileActiveObject.y
      );

      const tile = document.getElementById(id);
      tile.classList.remove(array[1]);
      tile.classList.add("sky");
      tileActiveObject.type = "sky";
      this.addUtility(array[1]);
      this.deActiveTile();
      this.deActiveTool();
      document.body.style.cursor = "auto";
    }
  }

  checkTheMatch(array) {
    for (let i = 0; i < typesMatrixesMatch.length; i++) {
      if (
        array[0] === typesMatrixesMatch[i][0] &&
        array[1] === typesMatrixesMatch[i][1]
      ) {
        return true;
      }
    }
  }

  returnActiveTile() {
    for (let row_i = 0; row_i < 20; row_i++) {
      for (let col_j = 0; col_j < 40; col_j++) {
        if (
          this.tiles_matrix[row_i][col_j].active_status === this.tile_active
        ) {
          return this.tiles_matrix[row_i][col_j];
        }
      }
    }
  }
  returnActiveTool() {
    for (let i = 0; i < this.tools_matrix.length; i++) {
      if (this.tools_matrix[i].active_status === this.tool_active) {
        return this.tools_matrix[i];
      }
    }
  }
  returnActiveUtility() {
    for (let i = 0; i < this.utilities_matrix.length; i++) {
      if (this.utilities_matrix[i].active_status === this.tool_active) {
        return this.utilities_matrix[i];
      }
    }
  }
  activeTile() {
    for (let row_i = 0; row_i < 20; row_i++) {
      for (let col_j = 0; col_j < 40; col_j++) {
        const id = String(row_i) + "-" + String(col_j);
        const tile = document.getElementById(id);
        tile.addEventListener("click", () => {
          this.deActiveTile();
          this.tiles_matrix[row_i][col_j].active_status = this.tile_active;
          tile.classList.add("tile-active");
        });
      }
    }
  }

  deActiveTile() {
    for (let row_i = 0; row_i < 20; row_i++) {
      for (let col_j = 0; col_j < 40; col_j++) {
        const id = String(row_i) + "-" + String(col_j);
        const tile = document.getElementById(id);
        this.tiles_matrix[row_i][col_j].active_status = this.tile_not_active;
        tile.classList.remove("tile-active");
      }
    }
  }

  activeTool() {
    this.tools_matrix.forEach((tool_matrix, index) => {
      const tool = document.getElementById(index);
      tool.addEventListener("click", () => {
        this.deActiveTool();
        if (tool_matrix.active_status === this.tool_not_active) {
          tool_matrix.active_status = this.tool_active;
          const imagePath = `../../assets/cursors/${tool_matrix.type}.cur`;
          document.body.style.cursor = `url("${imagePath}"), auto`;
          tool.classList.add("active-tool");
        } else {
          this.deActiveTool();
        }
      });
    });
  }

  deActiveTool() {
    this.tools_matrix.forEach((tool_matrix, index) => {
      const tool = document.getElementById(index);
      tool.classList.remove("active-tool");
      tool_matrix.active_status = this.tool_not_active;
    });
  }

  activeUtility() {
    this.utilities_matrix.forEach((utility_matrix, index) => {
      const utility = document.querySelector(`.utility-cell[id="${index}"]`);
      utility.addEventListener("click", () => {
        this.deActiveUtility();

        utility_matrix.active_status = this.tool_active;

        utility.classList.add("active-utility");
      });
    });
  }
  deActiveUtility() {
    this.utilities_matrix.forEach((utility_matrix, index) => {
      const utility = document.querySelector(`.utility-cell[id="${index}"]`);

      utility.classList.remove("active-utility");
      utility_matrix.active_status = this.tool_not_active;
    });
  }
  defineTileCordinatesID(row, col) {
    let rowString = "";
    let colString = "";
    rowString = String(row);
    colString = String(col);
    let index = "";
    index = rowString + "-" + colString;
    return index;
  }

  addKitTools() {
    let i = 0;
    for (let [key, value] of Object.entries(toolsDictionary)) {
      const tool_matrix = new Tool(this.tool_not_active, value, i);
      this.tools_matrix.push(tool_matrix);
      const tool = document.createElement("div");
      tool.id = String(i);
      tool.classList.add(value);
      tool.classList.add("tool-cell");
      tools.appendChild(tool);
      i++;
    }
  }
}
