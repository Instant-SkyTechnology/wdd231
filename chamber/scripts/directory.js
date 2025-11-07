document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("memberContainer");
    const gridBtn = document.getElementById("gridView");
    const listBtn = document.getElementById("listView");
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

    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading member data:", error);
        }
    }

    function displayMembers(members) {
        container.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p><strong>Membership Level:</strong> ${["Member", "Silver", "Gold", "Platinum"][member.membership - 1]}</p>
      `;
            container.appendChild(card);
        });
    }

    // View toggling
    gridBtn.addEventListener("click", () => {
        container.classList.remove("list-view");
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
        container.classList.add("list-view");
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    });

    loadMembers();
});