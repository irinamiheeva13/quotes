import 'regenerator-runtime/runtime';
import {langArr} from './lang'

// Variables

const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');
const buttonMore = document.querySelector('.quote__button');
const buttonRuEng = document.querySelector('.footer__wrapper');
const allLang = ['ru', 'eng']


// Server 

const url = 'https://api.jsonbin.io/b/60781eea5b165e19f6209c68/1';

async function getData(url) {
  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    return json
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}


//  Database Functions


getData(url).then((data) => {
const getRandomQuote = function() {
  const randomQuote = data.quoteDatabase[Math.floor(Math.random()*data.quoteDatabase.length)];
  quoteText.innerHTML = randomQuote.text;
  quoteAuthor.innerHTML = randomQuote.author;
}

const buttonHadler = function() {
  buttonMore.addEventListener('click', () => {
      getRandomQuote(data);
  })
}

getRandomQuote(data);
buttonHadler();

})

// Language functions 

buttonRuEng.addEventListener('click', changeURLLanguage);

function changeURLLanguage(e) {
  let value = e.target.value;

  if (value === "RU") {
    location.href = window.location.pathname + '#' + "ru";
 } else {
    location.href = window.location.pathname + '#' + "eng";
    location.reload();
  }
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#' + "ru";
    location.reload();
  }


  for (let key in langArr) {
    let elem = document.querySelector('.lang-' + key);
    if(elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage()


