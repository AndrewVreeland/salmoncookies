// TODO: dynamically generate salmon objects using form data

'use strict';
// ****************** GLOBAL ************************
const arrOfHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const salesSectionElement = document.getElementById('salesSection');



// ****************** HELPER FUNCTION **************
function randomCust(min, max) {
  let answer = Math.floor(Math.random() * (max - min + 1)) + min;
  return answer;
}

// ****************** CONSTRUCTOR FUNCTIONS **************
function StoreLocations(name, minCust, maxCust, avgCookSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookSale = avgCookSale;
  this.dailyCookiesSold = 0;
  this.hourCookSale = [];
}
// ******************* OBJECT LITERALS ***********************
let Seattle = new StoreLocations('seattle', 23, 65, 6.3);
let tokyo = new StoreLocations('tokyo', 3, 24, 1.2);
let dubai = new StoreLocations('dubai', 11, 38, 3.7);
let paris = new StoreLocations('paris', 20, 38, 2.3);
let lima = new StoreLocations('lima', 2, 16, 4);
let globalStoreList = [Seattle, tokyo, dubai, paris, lima];
globalStoreList.push(Seattle);
// **************** TABLE RENDERING *******************************
const tableEle = document.createElement('table');
salesSectionElement.appendChild(tableEle);

function renderHeader() {
  let head = document.createElement('thead');
  let trEle = document.createElement('tr');
  let thEle = document.createElement('th');
  thEle.textContent = 'Store Location';
  trEle.appendChild(thEle);

  for (let i = 1; i < arrOfHours.length; i++) {
    thEle = document.createElement('th');
    thEle.textContent = arrOfHours[i];
    trEle.appendChild(thEle);
  }
  thEle = document.createElement('th');
  thEle.textContent = 'Daily Location Total';
  trEle.appendChild(thEle);
  head.appendChild(trEle);
  tableEle.appendChild(head);
}
function renderFooter() {
  let foot = document.createElement('tfoot');
  let trEle = document.createElement('tr');
  let thEle = document.createElement('th');
  let total;
  
  thEle.textContent = 'Totals';
  trEle.appendChild(thEle);

  for (let i = 0; i < globalStoreList.length; i++) {
    let total = 0;
    for (let j = 0; j < globalStoreList[i].avgCookSale.length; j++) {
      total += globalStoreList[i].avgCookSale[j];
      return total;
    }
  }
  for (let i = 2; i < arrOfHours.length; i++){
    thEle = document.createElement('th');
    thEle.textContent = total;
    trEle.appendChild(thEle);
  }
  thEle = document.createElement('th');
  thEle.textContent = total;
  trEle.appendChild(thEle);
  foot.appendChild(trEle);
  tableEle.appendChild(foot);
}

// ************************* PROTOTYPE METHODS *********************
StoreLocations.prototype.getCookies = function () {
  for (let i = 0; i < arrOfHours.length; i++) {
    let hourlyCust = randomCust(this.minCust, this.maxCust);
    let hourlyCookies = Math.floor(hourlyCust * this.avgCookSale);
    this.hourCookSale.push(hourlyCookies);
    this.dailyCookiesSold += hourlyCookies;
  }
};

StoreLocations.prototype.render = function () {
  const trEle = document.createElement('tr');
  tableEle.appendChild(trEle);
  const thEle = document.createElement('th');
  trEle.appendChild(thEle);
  thEle.textContent = this.name;
  for (let i = 1; i < this.hourCookSale.length; i++) {
    const tdEle = document.createElement('td');
    trEle.appendChild(tdEle);
    tdEle.textContent = this.hourCookSale[i];
  }
  let tdEle = document.createElement('td');
  tdEle.textContent = `Total: ${this.dailyCookiesSold}`;
  trEle.appendChild(tdEle);
};

// ***************** EXECUTABLE CODE ********************
Seattle.getCookies();
Seattle.render();
tokyo.getCookies();
tokyo.render();
dubai.getCookies();
dubai.render();
paris.getCookies();
paris.render();
lima.getCookies();
lima.render();
renderHeader();
renderFooter();
function renderAll() {
  for (let i = 0; i < globalStoreList.length; i++) console.log('hello');
}
// Seattle.render();
// renderAll();
// seattle.getNumOfCook();
// tokyo.getCookies();
// dubai.getCookies();
// paris.getCookies();
// lima.getCookies();
// console.log(seattle);
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();





// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookSale: 6.3,
//   hourCookSale: [],
//   dailyCookiesSold: 0,
//   getNumOfCook: function () {
//     for (let i = 0; i < arrOfHours.length; i++) {
//       let hourlyCust = randomCust(this.minCust, this.maxCust);
//       let hourlyCookies = Math.floor(hourlyCust * this.avgCookSale);
//       this.hourCookSale.push(hourlyCookies);
//       this.dailyCookiesSold += hourlyCookies;
//     }
//   },

//   render: function () {
//     const articleEle = document.createElement('article');
//     salesSectionElement.appendChild(articleEle);

//     const h2Ele = document.createElement('h2');
//     articleEle.appendChild(h2Ele);
//     h2Ele.textContent = this.name;

//     const ulEle = document.createElement('ul');
//     articleEle.appendChild(ulEle);
//     for (let i = 0; i < this.hourCookSale.length; i++) {
//       const liEle = document.createElement('li');
//       ulEle.appendChild(liEle);
//       liEle.textContent = `${arrOfHours[i]}, ${this.hourCookSale[i]},`;
//     }
//     let liEle = document.createElement('li');
//     liEle.textContent = `Total: ${this.dailyCookiesSold}`;
//     ulEle.appendChild(liEle);
//   }
// };

// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookSale: 1.2,
//   hourlyCookSale: [],
//   getCookies: function () {
//     for (let i = 0; i < arrOfHours.length; i++) {
//       let hourlyCust = randomCust(this.minCust, this.maxCust);
//       let hourlyCookies = Math.floor(hourlyCust * this.avgCookSale);
//       this.hourlyCookSale.push(hourlyCookies);
//       this.dailyCookiesSold += hourlyCookies;
//     }
//   },

//   render: function () {
//     const article = document.createElement('article');
//     salesSectionElement.appendChild(article);

//     const h2Ele = document.createElement('h2');
//     article.appendChild(h2Ele);
//     h2Ele.textContent = this.name;

//     const ulEle = document.createElement('ul');
//     article.appendChild(ulEle);
//     for (let i = 0; i < this.hourlyCookSale.length; i++) {
//       const liEle = document.createElement('li');
//       ulEle.appendChild(liEle);
//       liEle.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;
//     }
//     let liEle = document.createElement('li');
//     liEle.textContent = `Total: ${this.dailyCookiesSold}`;
//     ulEle.appendChild(liEle);
//   }
// };

// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookSale: 3.7,
//   hourlyCookSale: [],
//   getCookies: function () {
//     for (let i = 0; i < arrOfHours.length; i++) {
//       let hourlyCust = randomCust(this.minCust, this.maxCust);
//       let hourlyCookies = Math.floor(hourlyCust * this.avgCookSale);
//       this.hourlyCookSale.push(hourlyCookies);
//       this.dailyCookiesSold += hourlyCookies;

//     }
//   },
//   render: function () {
//     const article = document.createElement(`article`);
//     salesSectionElement.appendChild(article);

//     const h2Ele = document.createElement('h2');
//     article.appendChild(h2Ele);
//     h2Ele.textContent = this.name;

//     const ulEle = document.createElement('ul');
//     article.appendChild(ulEle);
//     for (let i = 0; i < this.hourlyCookSale.length; i++) {
//       const liEle = document.createElement('li');
//       ulEle.appendChild(liEle);
//       liEle.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;

//     }
//     let liEle = document.createElement('li');
//     liEle.textContent = `Total: ${this.dailyCookiesSold}`;
//     ulEle.appendChild(liEle);
//   }
// };
// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookSale: 2.3,
//   hourlyCookSale: [],
//   getCookies: function () {
//     for (let i = 0; i < arrOfHours.length; i++) {
//       let hourlyCust = randomCust(this.minCust, this.maxCust);
//       let hourlyCookies = Math.floor(hourlyCust * this.avgCookSale);
//       this.hourlyCookSale.push(hourlyCookies);
//       this.dailyCookiesSold += hourlyCookies;

//     }
//   },
//   render: function () {
//     const article = document.createElement(`article`);
//     salesSectionElement.appendChild(article);

//     const h2Ele = document.createElement('h2');
//     article.appendChild(h2Ele);
//     h2Ele.textContent = this.name;

//     const ulEle = document.createElement('ul');
//     article.appendChild(ulEle);
//     for (let i = 0; i < this.hourlyCookSale.length; i++) {
//       const liEle = document.createElement('li');
//       ulEle.appendChild(liEle);
//       liEle.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;

//     }
//     let liEle = document.createElement('li');
//     liEle.textContent = `Total: ${this.dailyCookiesSold}`;
//     ulEle.appendChild(liEle);
//   }
// };
// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookSale: 4.6,
//   hourlyCookSale: [],
//   getCookies: function () {
//     for (let i = 0; i < arrOfHours.length; i++) {
//       let hourlyCust = randomCust(this.minCust, this.maxCust);
//       let hourlyCookies = Math.floor(hourlyCust * this.avgCookSale);
//       this.hourlyCookSale.push(hourlyCookies);
//       this.dailyCookiesSold += hourlyCookies;

//     }
//   },
//   render: function () {
//     const article = document.createElement(`article`);
//     salesSectionElement.appendChild(article);

//     const h2Ele = document.createElement('h2');
//     article.appendChild(h2Ele);
//     h2Ele.textContent = this.name;

//     const ulEle = document.createElement('ul');
//     article.appendChild(ulEle);
//     for (let i = 0; i < this.hourlyCookSale.length; i++) {
//       const liEle = document.createElement('li');
//       ulEle.appendChild(liEle);
//       liEle.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;

//     }
//     let liEle = document.createElement('li');
//     liEle.textContent = `Total: ${this.dailyCookiesSold}`;
//     ulEle.appendChild(liEle);
//   }
// };
