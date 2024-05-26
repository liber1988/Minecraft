import A from "./tiles-models.js";

export function createStartTemplate() {
  const STARTING_TEMPLATE = [];

  for (let j = 0; j < 10; j++) {
    let row = [];
    for (let i = 0; i < 40; i++) {
      row.push(A.sky);
    }
    STARTING_TEMPLATE.push(row);
  }

  for (let j = 10; j < 20; j++) {
    let row = [];
    for (let i = 0; i < 40; i++) {
      row.push(A.soil);
    }
    STARTING_TEMPLATE.push(row);
  }
  for (let j = 10; j < 14; j++) {
    let row = [];
    for (let i = 0; i < 40; i++) {
      STARTING_TEMPLATE[j][i] = A.stone;
    }
  }

  for (let j = 5; j < 10; j++) {
    let row = [];
    for (let i = 10; i < 15; i++) {
      STARTING_TEMPLATE[j][i] = A.wood;
    }
  }
  for (let j = 1; j < 5; j++) {
    let row = [];
    for (let i = 5; i < 20; i++) {
      STARTING_TEMPLATE[j][i] = A.leaves;
    }
  }
  return STARTING_TEMPLATE;
}
