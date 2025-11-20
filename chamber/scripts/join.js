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

// const npModal = document.querySelector("#npModal");
// const bronzeModal = document.querySelector("#bronzeModal");
// const silverModal = document.querySelector("#silverModal");
// const goldModal = document.querySelector("#goldModal");

// const dialogBox = document.querySelector("#dialogBox");
// const closeButton = document.querySelector("#closeButton");
// const dialogBoxText = document.querySelector("#dialogContent");

// npModal.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `Special events and networking.`
// });

// bronzeModal.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `Includes advertising & event discounts.`
// });

// silverModal.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `Enhanced advertising, training, and event access.`
// });

// goldModal.addEventListener("click", () => {
//     dialogBox.showModal();
//     dialogBoxText.innerHTML = `All perks, spotlight features, and premium events.`
// });

// closeButton.addEventListener("click", () => {
//     dialogBox.close();
// });

const npMember = document.querySelector("#npMember");
const bronzeMember = document.querySelector("#bronzeMember");
const silverMember = document.querySelector("#silverMember");
const goldMember = document.querySelector("#goldMember");

const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogContent = document.querySelector("#dialogContent");

npMember.addEventListener("click", () => {
    dialogContent.textContent = "Special events and networking.";
    dialogBox.showModal();
});

bronzeMember.addEventListener("click", () => {
    dialogContent.textContent = "Includes advertising & event discounts.";
    dialogBox.showModal();
});

silverMember.addEventListener("click", () => {
    dialogContent.textContent = "Enhanced advertising, training, and event access.";
    dialogBox.showModal();
});

goldMember.addEventListener("click", () => {
    dialogContent.textContent = "All perks, spotlight features, and premium events.";
    dialogBox.showModal();
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

