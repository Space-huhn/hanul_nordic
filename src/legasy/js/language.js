'use strict'
import data from './languageStructure.js';
import headerMenuItems from './script.js';

const menuList = document.querySelector(".menu__list");

//function chenge language 
const changeLang = (lang) => {
    const sections = document.querySelectorAll('section');

    const languageUseNow = document.querySelector('.language__use-now');
    languageUseNow.innerText = lang;

    const str = window.location.pathname.slice(1, -5);
    const pathName = str.includes('pages') ? str.slice(6) : 'homePage';

    sections.forEach(element => {
        const elementArray = element.querySelectorAll('*')

        elementArray.forEach((item) => {
            if (item.hasAttribute('id')) {
                if (item.tagName === 'TEXTAREA') return;

                item.innerText = data?.[lang]?.[pathName]?.[element.className]?.[item.id]
            }
        })
    });
}

//function chenge language in input and textarea
const changeLangPlaceholder = (lang) => {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(element => {
        element.setAttribute("placeholder", data?.[lang]?.homePage?.booking?.[element.id])
    });
}

//open-close submenu 
const openSubmenu = (event) => {
    if (!event.target.closest(".menu__list")) return;

    const link = event.target.getAttribute('href');

    if (link === '#') {
        event.preventDefault();

        const ul = event.target.nextElementSibling;
        const a = event.target;

        ul.classList.toggle("active")
        a.classList.toggle("active")
    }
}

//close submenu on click out menu
const closeSubmenu = (event) => {
    if (event.target.closest(".menu__list")) return;

    const menuLink = menuList.querySelectorAll(".menu__link");
    const menuSublist = menuList.querySelectorAll(".menu__sublist");

    menuLink.forEach(element => {
        element.classList.remove('active')
    });

    menuSublist.forEach(element => {
        element.classList.remove('active')
    });
}

menuList.addEventListener('click', openSubmenu)
document.addEventListener('click', closeSubmenu)

let lang;

//get language on page is load
window.addEventListener('load', () => {
    let loc = window.location.hash.slice(1);

    const languageId = ['ro', 'ru', 'en'];

    if (languageId.includes(loc)) {
        lang = `${loc}`;
    } else {
        lang = "ro";
    }

    headerMenuItems(lang);
    changeLang(lang);
    changeLangPlaceholder(lang);
})

//get language on select
const languageOtions = document.querySelector('.language__list');

//set new language on select
languageOtions.addEventListener('click', (event) => {
    const languageOtion = event.target.id;
    const languageId = ['ro', 'ru', 'en'];

    if (languageId.includes(languageOtion)) {
        lang = `${languageOtion}`;
    } else {
        lang = "ro";
    }

    changeLang(lang);
    headerMenuItems(lang);
    changeLangPlaceholder(lang);
})

// const faciliyCardCreation 


