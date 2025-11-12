// Fetch and display random "spotlight" members (Gold or Silver)
async function displaySpotlights() {
    const response = await fetch('data/members.json'); // adjust path if needed
    const members = await response.json();

    // Filter only Gold (4) and Silver (3) members
    const qualifiedMembers = members.filter(member =>
        member.membership === 3 || member.membership === 4
    );

    // Shuffle members randomly
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

    // Pick 2 or 3 members randomly
    const numToShow = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const selected = shuffled.slice(0, numToShow);

    // Get the container element
    const container = document.getElementById('cards');
    container.innerHTML = ''; // clear previous

    // Create spotlight cards
    selected.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('spotlight-card');

    //     card.innerHTML = `
    //   <img src="images/${member.image}" alt="${member.name} logo">
    //   <h3>${member.name}</h3>
    //   <p><strong>Address:</strong> ${member.address}</p>
    //   <p><strong>Phone:</strong> ${member.phone}</p>
    //   <p><a href="${member.website}" target="_blank">Visit Website</a></p>
    //   <p><strong>Membership Level:</strong> ${member.membership === 4 ? 'Gold' : 'Silver'}</p>
        // `;
        card.innerHTML = `
  <h3>${member.name}</h3>
  <div class="membership-tag">
    ${member.membership === 4 ? 'Gold Member' : 'Silver Member'}
  </div>
  <div class="divider"></div>
  <img src="images/${member.image}" alt="${member.name} logo">
  <div class="contact-info">
    <p><strong>Tel:</strong> ${member.phone}</p>
    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
  </div>
`;

        container.appendChild(card);
    });
}

displaySpotlights();