import 'regenerator-runtime/runtime';

 function renderData() {
    const quoteText = document.querySelector('.quote__text');
    const quoteAuthor = document.querySelector('.quote__author');
    const buttonMore = document.querySelector('.quote__button');

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

    let promise = getData(url);

    console.log(promise);


    promise.then((data) => {
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

    });
}


export default renderData;