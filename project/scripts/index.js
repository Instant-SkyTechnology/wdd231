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
    img1: "This is the Distillery Historic District!",
    img2: "This is Kensington Market!",
    img3: "This is Ottawa!",
    img4: "Another shot of the Distillery Historic District.",
    img5: "A different view of Kensington Market.",
    img6: "A beautiful view of Ottawa!",
    img7: "Kensington Market in the evening.",
    img8: "Ottawa in the morning!"
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




