import A from "./tiles-models.js";
export const STARTING_TEMPLATE = new Map([
  [0, [A.sky]],
  [1, [A.sky]],
  [2, [A.sky]],
  [
    3,
    [
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.cloud,
      A.cloud,
      A.cloud,
    ],
  ],
  [
    4,
    [
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.cloud,
      A.cloud,
      A.cloud,
      A.cloud,
      A.cloud,
      A.cloud,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.leaveser,
      A.leaveser,
      A.leaveser,
      A.sky,
    ],
  ],
  [
    5,
    [
      A.sky,
      A.sky,
      A.leaves,
      A.leaves,
      A.leaves,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.cloud,
      A.cloud,
      A.cloud,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.leaveser,
      A.leaveser,
      A.leaveser,
    ],
  ],
  [
    6,
    [
      A.sky,
      A.sky,
      A.leaves,
      A.leaves,
      A.leaves,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.leaveser,
      A.leaveser,
      A.leaveser,
    ],
  ],
  [
    7,
    [
      A.sky,
      A.sky,
      A.leaves,
      A.leaves,
      A.leaves,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.leaveser,
      A.leaveser,
      A.leaveser,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.stone,
      A.stone,
    ],
  ],
  [
    8,
    [
      A.sky,
      A.sky,
      A.sky,
      A.wood,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.wooder,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.stone,
      A.stone,
      A.stone,
    ],
  ],
  [
    9,
    [
      A.sky,
      A.sky,
      A.sky,
      A.wood,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.stone,
      A.stone,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.wooder,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.stone,
      A.stone,
      A.stone,
      A.gold,
    ],
  ],
  [
    10,
    [
      A.sky,
      A.sky,
      A.sky,
      A.wood,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.stone,
      A.stone,
      A.stone,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.wooder,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.sky,
      A.stone,
      A.stone,
      A.stone,
      A.diamond,
      A.diamond,
    ],
  ],
  [11, [A.grass]],
  [12, [A.soil]],
  [13, [A.soil]],
  [14, [A.soil]],
  [15, [A.soil]],
  [16, [A.soil]],
  [17, [A.soil]],
  [18, [A.gold]],
  [19, [A.diamond]],
]);
for (let [key, value] of myMap) {
  console.log(key, value);
}