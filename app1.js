'use strict';

let myH2 = document.querySelector('h2');

function handleClick(event) {
  console.log('this h2 was clicked.');
}

myH2.addEventListener('click', handleClick);
