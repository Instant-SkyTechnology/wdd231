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


        // photo.addEventListener("click", () => showStuff(place));

        showHere.appendChild(Card);
    });
}

// function showStuff(place) {
//     mytitle.textContent = place.name;
//     myinfo.textContent = `Dedicated ${place.dedicated} by ${place.person} as temple number ${place.number}.`;

//     mydialog.showModal();
// }

displayItem(places);
