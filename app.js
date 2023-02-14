// ****************** GLOBAL ************************
const arrOfHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

const salesSectionElement = document.getElementById('storeLocations');
// ******************* OBJECT LITERALS ***********************
const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  hourCookSale: [],
  getNumOfCook: function () {
    for (let i = 0; i < arrOfHours.length; i++) {
      let hourlyCust = randomCust(this.minCust, this.maxCust);
      let totalHCook = Math.floor(hourlyCust * this.avgCookSale);
      this.hourCookSale.push(totalHCook);
    }
  },

  render: function () {
    const article = document.createElement('article');
    salesSectionElement.appendChild(article);

    const h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    const list = document.createElement('ul');
    article.appendChild(list);
    for (let i = 0; i < this.hourCookSale.length; i++) {
      const li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${arrOfHours[i]}, ${this.hourCookSale[i]},`;
    }

  }
};

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2,
  hourlyCookSale: [],
  getCookies: function () {
    for (let i = 0; i < arrOfHours.length; i++) {
      let hourlyCust = randomCust(this.minCust, this.maxCust);
      let totalHCook = Math.floor(hourlyCust * this.avgCookSale);
      this.hourlyCookSale.push(totalHCook);
    }
  },

  render: function () {
    const article = document.createElement('article');
    salesSectionElement.appendChild(article);

    const h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    const list = document.createElement('ul');
    article.appendChild(list);
    for (let i = 0; i < this.hourlyCookSale.length; i++) {
      const li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;
    }
  }
};

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7,
  hourlyCookSale: [],
  getCookies: function () {
    for (let i = 0; i < arrOfHours.length; i++) {
      let hourlyCust = randomCust(this.minCust, this.maxCust);
      let avgCookies = Math.floor(hourlyCust * this.avgCookSale);
      this.hourlyCookSale.push(avgCookies);

    }
  },
  render: function () {
    const article = document.createElement(`article`);
    salesSectionElement.appendChild(article);

    const h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    const list = document.createElement('ul')
    article.appendChild(list)
    for (let i = 0; i < this.hourlyCookSale.length; i++) {
      const li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;

    }
  }
};
const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3,
  hourlyCookSale: [],
  getCookies: function () {
    for (let i = 0; i < arrOfHours.length; i++) {
      let hourlyCust = randomCust(this.minCust, this.maxCust);
      let avgCookies = Math.floor(hourlyCust * this.avgCookSale);
      this.hourlyCookSale.push(avgCookies);

    }
  },
  render: function () {
    const article = document.createElement(`article`);
    salesSectionElement.appendChild(article);

    const h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    const list = document.createElement('ul')
    article.appendChild(list)
    for (let i = 0; i < this.hourlyCookSale.length; i++) {
      const li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;

    }
  }
};
const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6,
  hourlyCookSale: [],
  getCookies: function () {
    for (let i = 0; i < arrOfHours.length; i++) {
      let hourlyCust = randomCust(this.minCust, this.maxCust);
      let avgCookies = Math.floor(hourlyCust * this.avgCookSale);
      this.hourlyCookSale.push(avgCookies);

    }
  },
  render: function () {
    const article = document.createElement(`article`);
    salesSectionElement.appendChild(article);

    const h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    const list = document.createElement('ul')
    article.appendChild(list)
    for (let i = 0; i < this.hourlyCookSale.length; i++) {
      const li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${arrOfHours[i]}, ${this.hourlyCookSale[i]}`;

    }
  }
};


// TODO: dynamically generate salmon objects using form data

'use strict';


// ****************** HELPER FUNCTION **************
function randomCust(min, max) {
  let answer = Math.floor(Math.random() * (max - min + 1)) + min;
  return answer;
}


// ***************** EXECUTABLE CODE ********************

seattle.getNumOfCook();
tokyo.getCookies();
dubai.getCookies();
paris.getCookies();
lima.getCookies();
console.log(seattle);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
