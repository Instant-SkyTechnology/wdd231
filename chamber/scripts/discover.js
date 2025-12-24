import { places } from '../data/discover.mjs'
console.log(places)


const showHere = document.querySelector("#allplaces");

// Close button works
// myclose.addEventListener("click", () => mydialog.close());

function displayItem(places) {
    places.forEach(place => {
        // CARD ELEMENT
        const Card = document.createElement("div")
        // PHOTO ELEMENT
        const photo = document.createElement("img")
        photo.src = `images/${place.photo_url}`
        photo.alt = place.name;
        photo.loading = 'lazy';
        // TITLE ELEMENT
        const titles = document.createElement("h2")
        titles.innerText = place.name
        // ADDRESS ELEMENT
        const theaddress = document.createElement("address")
        theaddress.innerText = place.address
        // DESCRIPTION ELEMENT
        const description = document.createElement("p")
        description.innerText = place.description

        Card.appendChild(photo)
        Card.appendChild(titles)
        Card.appendChild(theaddress)
        Card.appendChild(description)


        showHere.appendChild(Card);
    });
}
displayItem(places);


// LAST VISIT MESSAGE
const messageBox = document.querySelector("#visit-message");

// Retrieve the last visit date
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
let message = "";

if (!lastVisit) {
    // First visit
    message = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitTime = parseInt(lastVisit);
    const difference = now - lastVisitTime;

    const msInDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(difference / msInDay);

    if (days < 1) {
        message = "Back so soon! Awesome!";
    } else if (days === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${days} days ago.`;
    }
}

// Display message in the box
messageBox.textContent = message;

// Store the current visit time
localStorage.setItem("lastVisit", now);
