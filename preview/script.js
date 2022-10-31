'use strict';

const boxesQuery = document.querySelector('.box');
const boxesGet = document.querySelector('.block');

boxesQuery.forEach(box => {
  if (box.matches('.this')) console.log(box);
})