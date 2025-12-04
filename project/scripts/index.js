document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    const modified = document.getElementById("lastModified");

    const navButton = document.querySelector('#nav-button');
    const navBar = document.querySelector('#nav-bar');

    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        navBar.classList.toggle('show');
    });

    year.textContent = new Date().getFullYear();
    modified.textContent = document.lastModified;


});

// LAST VISIT MESSAGE
const messageBox = document.querySelector("#visit-message");

// Retrieve the last visit date
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
let message = "";

if (!lastVisit) {
    // First visit
    message = "Welcome! Click on the images to learn more.";
} else {
    const lastVisitTime = parseInt(lastVisit);
    const difference = now - lastVisitTime;

    const msInDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(difference / msInDay);

    if (days < 1) {
        message = "Back so soon! Click on the images to learn more.";
    } else if (days === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${days} days ago. Click on the images to learn more.`;
    }
}

// Display message in the box
messageBox.textContent = message;

// Store the current visit time
localStorage.setItem("lastVisit", now);

// DIALOG MESSAGE
const dialog = document.getElementById('image-dialog');
const closeBtn = document.getElementById('close-dialog');
const dialogMessage = document.getElementById('dialog-message');

// Map image ids to messages
const imageMessages = {
    img1: 'Paris, the "City of Light," enchants visitors with its iconic landmarks, charming streets, and rich culture. From the Eiffel Tower to the Seine and cozy cafés, the city offers beauty, romance, and unforgettable experiences at every corner.',
    img2: "Kensington Market is one of Toronto’s most vibrant and eclectic neighborhoods, known for its colorful streets, independent shops, and lively multicultural atmosphere. Visitors can explore unique vintage stores, taste diverse international foods, and enjoy the creative energy that fills every corner of the area. With its artistic murals, open-air markets, and welcoming community vibe, Kensington Market offers an unforgettable and authentic urban experience.",
    img3: "Toronto is a dynamic and diverse city, known for its stunning skyline, cultural richness, and welcoming spirit. From the iconic CN Tower to the bustling waterfront, the city offers endless attractions for visitors to explore. Its vibrant neighborhoods, world-class museums, and global cuisine reflect a blend of cultures from around the world. With its lively arts scene, beautiful parks, and energetic downtown, Toronto provides an exciting and unforgettable urban experience.",
    img4: "The Distillery Historic District is one of Toronto’s most charming and atmospheric destinations, known for its beautifully preserved Victorian-era architecture and cobblestone streets. Once home to a major whiskey distillery, the area is now a vibrant cultural hub filled with art galleries, boutique shops, cafés, and restaurants. Visitors can enjoy its unique blend of history and creativity while exploring seasonal markets, outdoor installations, and lively events that bring the district to life.",
    img5: "Cape Town is a breathtaking coastal city known for its dramatic landscapes, rich culture, and vibrant energy. Framed by the iconic Table Mountain and the sparkling Atlantic Ocean, the city offers endless opportunities for adventure and relaxation. Visitors can explore stunning beaches, colorful neighborhoods like Bo-Kaap, and world-renowned attractions such as the V&A Waterfront and Robben Island. With its natural beauty, diverse heritage, and lively atmosphere, Cape Town is a destination that inspires and captivates every traveler.",
    img6: "Tokyo, Japan’s bustling capital, blends futuristic skyscrapers with traditional temples, offering a unique mix of modernity and culture. Visitors can explore vibrant neighborhoods, savor world-famous cuisine, and experience cutting-edge technology alongside serene gardens and historic shrines. With its energy, beauty, and endless attractions, Tokyo leaves every traveler inspired and amazed.",
    img7: "Indonesia is a diverse and captivating country made up of thousands of islands, each offering its own natural beauty and cultural richness. From the lush rainforests of Sumatra and the volcanic landscapes of Java to the stunning beaches of Bali and the vibrant marine life in Raja Ampat, the nation is a paradise for explorers. Its traditions, cuisines, and warm hospitality reflect a blend of cultures from across the archipelago. With breathtaking scenery, rich heritage, and endless adventures, Indonesia offers an unforgettable experience for every traveler.",
    img8: 'New York City is a vibrant metropolis known for its iconic skyline, fast-paced energy, and endless cultural experiences. From the bright lights of Times Square and the towering Statue of Liberty to the peaceful paths of Central Park, the city offers something for every kind of traveler. Its diverse neighborhoods, world-class museums, and incredible food scene reflect the melting pot of cultures that define NYC. With its unforgettable sights and electric atmosphere, New York City truly lives up to its reputation as “the city that never sleeps.”'
};

// Attach click event to each image by id
Object.keys(imageMessages).forEach(id => {
    const img = document.getElementById(id);
    if (img) {
        img.addEventListener('click', () => {
            dialogMessage.textContent = imageMessages[id];
            dialog.showModal();
        });
    }
});

// Close button
closeBtn.addEventListener('click', () => {
    dialog.close();
});




