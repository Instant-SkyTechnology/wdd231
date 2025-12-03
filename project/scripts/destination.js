// Sample JSON data – replace with external file if needed
const travelData = [
    {
        "name": "Paris, France",
        "image": "images/paris.jpg",
        "description": "The city of lights, famous for art, culture, and food."
    },
    {
        "name": "Tokyo, Japan",
        "image": "images/tokyo.jpg",
        "description": "A bustling metropolis blending tradition and modern innovation."
    },
    {
        "name": "Cape Town, South Africa",
        "image": "images/capetown.jpg",
        "description": "Beautiful landscapes with mountains, oceans, and wildlife."
    },
    {
        "name": "Bali, Indonesia",
        "image": "images/bali.jpg",
        "description": "A tropical paradise known for beaches, temples, waterfalls, and vibrant culture."
    },
    {
        "name": "New York City, USA",
        "image": "images/nyc.jpg",
        "description": "The city that never sleeps, famous for skyscrapers, Broadway, and diverse food."
    },
    {
        "name": "Barcelona, Spain",
        "image": "images/barcelona.jpg",
        "description": "A Mediterranean city filled with art, architecture, beaches, and colorful street life."
    },
    {
        "name": "Sydney, Australia",
        "image": "images/sydney.jpg",
        "description": "Home to iconic landmarks like the Sydney Opera House and beautiful coastal scenery."
    },
    {
        "name": "Rio de Janeiro, Brazil",
        "image": "images/rio.jpg",
        "description": "A lively city known for its beaches, Carnival festival, and Christ the Redeemer statue."
    },
    {
        "name": "Reykjavik, Iceland",
        "image": "images/reykjavik.jpg",
        "description": "A gateway to breathtaking natural wonders like geysers, glaciers, and the Northern Lights."
    }

];

const container = document.getElementById("destinations");

travelData.forEach(destination => {
    const card = document.createElement("div");
    card.classList.add("destination-card");

    card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            `;

    container.appendChild(card);
});