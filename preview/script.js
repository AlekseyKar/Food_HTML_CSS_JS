'use strict';

const shops = [
  {rice: 200},
  {rice: 300},
  {rice: 400},
];
const budget = [5000, 12222, 15555];

const map = new Map();

shops.forEach((shop,i) => { 
  map.set(shop, budget[i]);
})
console.log(map);