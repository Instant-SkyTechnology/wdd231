const getString = window.location.search;
console.log(getString);

// const myInfo = new URLSearchParams(window.location.search); shorthand nethod

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const result = document.querySelector("#results").innerHTML = `
<h2><strong>Thank You for Your Application!</strong></h2>
<p>We have received your application with the following details:</p>
<p>First Name: ${myInfo.get("firstName")}</p>
<p>Last Name: ${myInfo.get("lastName")}</p>
<p>Your phone: ${myInfo.get("mobile")}</p>
<p>Your email is ${myInfo.get("email")}</p>
<p>business name <strong>${myInfo.get("orgName")}</strong></p>
<p><strong>Submitted at: <span id="timestamp"></span></strong></p>`;

// Populate the timestamp span with the value from the URL
document.getElementById("timestamp").textContent = myInfo.get("timestamp")
    ? new Date(myInfo.get("timestamp")).toLocaleString()
    : "N/A";


// Buttons
const npBtn = document.getElementById('npBtn');
const bronzeBtn = document.getElementById('bronzeBtn');
const silverBtn = document.getElementById('silverBtn');
const goldBtn = document.getElementById('goldBtn');

// Dialogs
const npMember = document.getElementById('npMember');
const bronzeMember = document.getElementById('bronzeMember');
const silverMember = document.getElementById('silverMember');
const goldMember = document.getElementById('goldMember');

// Open dialogs
npBtn.addEventListener('click', () => npMember.showModal());
bronzeBtn.addEventListener('click', () => bronzeMember.showModal());
silverBtn.addEventListener('click', () => silverMember.showModal());
goldBtn.addEventListener('click', () => goldMember.showModal());

// Close dialogs
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('dialog').close());
});



// document.addEventListener("DOMContentLoaded", () => {

//     const openButton1 = document.querySelector("#openButton1");
//     const openButton2 = document.querySelector("#openButton2");
//     const openButton3 = document.querySelector("#openButton3");
//     const openButton4 = document.querySelector("#openButton4");

//     const dialogBox = document.querySelector("#dialogBox");
//     const closeButton = document.querySelector("#closeButton");
//     const dialogContent = document.querySelector("#dialogContent");

//     // Prevent errors if dialog is missing
//     if (!dialogBox || !dialogContent || !closeButton) {
//         console.error("❌ Dialog elements not found in the DOM.");
//         return;
//     }

//     if (openButton1) {
//         openButton1.addEventListener("click", () => {
//             dialogBox.showModal();
//             dialogContent.textContent = "Special events and networking.";
//         });
//     }

//     if (openButton2) {
//         openButton2.addEventListener("click", () => {
//             dialogBox.showModal();
//             dialogContent.textContent = "Includes advertising & event discounts.";
//         });
//     }

//     if (openButton3) {
//         openButton3.addEventListener("click", () => {
//             dialogBox.showModal();
//             dialogContent.textContent = "Enhanced advertising, training, and event access.";
//         });
//     }

//     if (openButton4) {
//         openButton4.addEventListener("click", () => {
//             dialogBox.showModal();
//             dialogContent.textContent = "All perks, spotlight features, and premium events.";
//         });
//     }

//     closeButton.addEventListener("click", () => {
//         dialogBox.close();
//     });

//     alert("JOIN.JS IS RUNNING!");

//     console.log("openButton1 =", openButton1);
//     console.log("dialogBox =", dialogBox);
//     console.log("closeButton =", closeButton);

// });




