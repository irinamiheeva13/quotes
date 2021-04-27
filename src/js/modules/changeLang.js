import langArr from './langArr'

export function changeURLLanguage() {
    const buttonRuEng = document.querySelector('.footer__wrapper');
    buttonRuEng.addEventListener('click', (e) => {
        let value = e.target.value;

        if (value === "RU") {
            location.href = window.location.pathname + '#' + "ru";
        } else {
            location.href = window.location.pathname + '#' + "eng";
            location.reload();
        }
});

}


export function changeLanguage() {
    const allLang = ['ru', 'eng'];

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



