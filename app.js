// TODO: dynamically generate salmon objects using form data

'use strict';


// ****************** HELPER FUNCTION **************

function randomCook(min, max) {
  Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomCust(min, max) {
  Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomCookSale() {
  let cookiesale = 1
  for (i = 0; i < arrOfHours.length; i++) {
    cookiesale = randomCook(1,100);

  }
  // ****************** GLOBAL ************************
  const arrOfHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


  // ******************* OBJECT LITERALS ***********************
  const Seattle = {
    name: Seattle,
    minCust: 23,
    maxCust: 65,
    avgCookSale: 6.3,
    hourCookSale: [],
    numOfCust: randomCust(23, 65),
  };
// ***************** EXECUTABLE CODE ********************