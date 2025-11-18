import { temples } from "../data/temples.js";

import { url } from "../data/temples.js";

// displayItem(temples)
const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

// Close button works
myclose.addEventListener("click", () => mydialog.close());

function displayItem(data) {
    data.forEach(x => {
        const photo = document.createElement("img");
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;

        photo.addEventListener("click", () => showStuff(x));

        showHere.appendChild(photo);
    });
}

function showStuff(x) {
    mytitle.textContent = x.name;
    myinfo.textContent = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}.`;

    mydialog.showModal();
}

displayItem(temples);