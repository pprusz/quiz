import React, { useState } from "react";
import { level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12, extraLevel } from "./questions/levels";


const getQuestions = () => {
const getRandomIndex = (level) => Math.floor(Math.random() * level.length);
  const randomIndex1 = getRandomIndex(level1);
  const randomIndex2 = getRandomIndex(level2);
  const randomIndex3 = getRandomIndex(level3);
  const randomIndex4 = getRandomIndex(level4);
  const randomIndex5 = getRandomIndex(level5);
  const randomIndex6 = getRandomIndex(level6);
  const randomIndex7 = getRandomIndex(level7);
  const randomIndex8 = getRandomIndex(level8);
  const randomIndex9 = getRandomIndex(level9);
  const randomIndex10 = getRandomIndex(level10);
  const randomIndex11 = getRandomIndex(level11);
  const randomIndex12 = getRandomIndex(level12);
  const randomIndex13 = getRandomIndex(extraLevel);

  return [    level1[randomIndex1],
    level2[randomIndex2],
    level3[randomIndex3],
    level4[randomIndex4],
    level5[randomIndex5],
    level6[randomIndex6],
    level7[randomIndex7],
    level8[randomIndex8],
    level9[randomIndex9],
    level10[randomIndex10],
    level11[randomIndex11],
    level12[randomIndex12],
    extraLevel[randomIndex13],
  ];
};

const questions = getQuestions();
console.log(questions)

export { questions };