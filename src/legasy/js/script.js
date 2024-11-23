'use strict'
import data from './languageStructure.js';

let burgerElement = document.querySelector('.header-burger');
let bodyScrollLook = document.querySelector('body');
let logo = document.querySelector('.header__logo');
let language = document.querySelector('.language');
let header = document.querySelector('.header');
let menu = document.querySelector('.menu');

//make image from container use like backgraund

let ibg = document.querySelectorAll('.ibg');
ibg.forEach((element, index) => {
    let a = `../${element.querySelector('img').getAttribute('src')}`;
    element.style.backgroundImage = `url('${a}')`;
});

function togleBurgerMenu() {
    burgerElement.classList.toggle('active');
    bodyScrollLook.classList.toggle('scroll-look');
    header.classList.toggle('active');
    menu.classList.toggle('active');
}

function closeBurgerMenu() {
    burgerElement.classList.remove('active');
    bodyScrollLook.classList.remove('scroll-look');
    header.classList.remove('active');
    menu.classList.remove('active');
}

//open burger on click to burger button
burgerElement.addEventListener('click', togleBurgerMenu);

//close burger on go to the link
menu.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__link')) return;

    const link = e.target.getAttribute('href');

    if (e.target.closest('.menu__link') && link !== '#') closeBurgerMenu();
})

//open language select list 
language.addEventListener('click', () => language.classList.toggle('active'));

//close burger on click to logo
logo.addEventListener('click', closeBurgerMenu)

//move element from top to burger menu
function dinamicAdaptiveMenu() {
    let mainScreenWidth = document.documentElement.clientWidth;

    let moveElementDiv = document.querySelector('.header-top');

    let menu = document.querySelector('.menu');

    let container = document.querySelector('.header .container');

    function moveElement() {
        let viewportWidt = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (viewportWidt < 1199.99) {
            menu.append(moveElementDiv);
        } else {
            container.prepend(moveElementDiv);
        }
    }

    window.addEventListener('resize', moveElement);

    if (mainScreenWidth < 1199.99) {
        moveElement();
    }
}
dinamicAdaptiveMenu();

//move element in new line for adaptive
function dinamicAdaptiveFooter() {
    let mainScreenWidth = document.documentElement.clientWidth;

    let moveElementDiv = document.querySelector('.footer__center');

    let destination = document.querySelector('.footer__flex-wrapper');

    let relativElement = document.querySelector('footer__logo');

    function moveElement() {
        let viewportWidt = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (viewportWidt < 992) {
            destination?.append(moveElementDiv);
        } else {
            relativElement?.after(moveElementDiv);
        }
    }

    window.addEventListener('resize', moveElement);

    if (mainScreenWidth < 992) {
        moveElement();
    }
}
dinamicAdaptiveFooter();

//add class to header on scroll for styling
function scrollFromTop() {
    let scrollLenth = window.pageYOffset;
    if (scrollLenth >= 100) {
        header.classList.add('on-scroll');
    } else {
        header.classList.remove('on-scroll');
    }
}
scrollFromTop()

window.addEventListener('scroll', scrollFromTop);

//dinamic create menu
const headerMenuItems = (lang) => {
    const container = document.querySelector('.menu__list');

    container.innerHTML = '';

    data?.[lang]?.menuItems.forEach((item) => {
        const createElement = (object, parentElement) => {
            const listItem = document.createElement('li');
            listItem.className = 'menu__item';

            const link = document.createElement('a');
            link.className = 'menu__link';

            link.innerText = object.name;
            link.setAttribute("href", object.link);

            listItem.appendChild(link);

            parentElement.appendChild(listItem);

            if (object.sub) {
                const enterContainer = document.createElement('ul');
                enterContainer.className = "menu__sublist";

                const span = document.createElement('span');
                span.className = "arrow";
                link.appendChild(span);

                listItem.appendChild(enterContainer);
                object.sub.forEach((item) => {
                    createElement(item, enterContainer)
                })
            }
        }

        createElement(item, container)
    })
}

const foolScreen = () => {
    const videoContainer = document.querySelector('.fullscreen');
    const video = document.querySelector('.fullscreen__video');

    const aspectRatio = 1.78;

    if (!videoContainer) return;

    const videoHeight = videoContainer.offsetHeight;
    const videoWidth = video.offsetWidth;

    const newWidth = videoHeight * aspectRatio;

    video.style.width = newWidth + "px";
    video.style.height = videoWidth + "px";
}
foolScreen();

window.addEventListener('resize', foolScreen)

















export default headerMenuItems;






// technologiIcons.forEach(element => {
//     element.addEventListener('mouseover', () => {
//         if (element.getAttribute('src').includes('frontend')) {
//             let url = element.getAttribute('src');
//             let newUrl = url.replace(/frontend/, 'frontend/on-hover');
//             element.setAttribute("src", newUrl);
//         }

//     });
// });

// function showMore() {
//     let buttonReadMore = document.querySelector('.read-more__btn');
//     let readMoreBlock = document.querySelector('.read-more');
//     buttonReadMore.addEventListener('click', () => readMoreBlock.classList.toggle('unhide'));
//     buttonReadMore.addEventListener('click', () => buttonReadMore.classList.toggle('active'));
// }
// showMore()