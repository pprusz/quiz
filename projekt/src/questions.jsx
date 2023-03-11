// import React, {useState} from "react";
import { level1 } from "./questions/level1"
import { level2 } from "./questions/level2";
import { level3 } from "./questions/level3";
import { level4 } from "./questions/level4";
import { level5 } from "./questions/level5";
import { level6 } from "./questions/level6";
import { level7 } from "./questions/level7";
import { level8 } from "./questions/level8";
import { level9 } from "./questions/level9";
import { level10 } from "./questions/level10";
import { level11 } from "./questions/level11";
import { level12 } from "./questions/level12";
import { extraLevel } from "./questions/extralevel";
const randomIndex = Math.floor(Math.random() * level1.length);
const randomIndex2 = Math.floor(Math.random() * level2.length);
const randomIndex3 = Math.floor(Math.random() * level3.length);
const randomIndex4 = Math.floor(Math.random() * level4.length);
const randomIndex5 = Math.floor(Math.random() * level5.length);
const randomIndex6 = Math.floor(Math.random() * level6.length);
const randomIndex7 = Math.floor(Math.random() * level7.length);
const randomIndex8 = Math.floor(Math.random() * level8.length);
const randomIndex9 = Math.floor(Math.random() * level9.length);
const randomIndex10 = Math.floor(Math.random() * level10.length);
const randomIndex11 = Math.floor(Math.random() * level11.length);
const randomIndex12 = Math.floor(Math.random() * level12.length);
const randomIndex13 = Math.floor(Math.random() * extraLevel.length);
console.log(randomIndex,randomIndex2,randomIndex3,randomIndex4,randomIndex5,randomIndex6,randomIndex7,randomIndex8,randomIndex9,randomIndex10,randomIndex11,randomIndex12)




const questions = [
  level1[randomIndex],
  level2[randomIndex2],
  level3[randomIndex3],
  level4[randomIndex4],
  level5[randomIndex5],
  level6[randomIndex6],
  level7[randomIndex8],
  level8[randomIndex7],
  level9[randomIndex9],
  level10[randomIndex10],
  level11[randomIndex11],
  level12[randomIndex12],
  extraLevel[randomIndex13],
]

export {questions}
