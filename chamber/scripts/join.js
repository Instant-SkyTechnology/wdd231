// Fetch content from the thankyou page
document.addEventListener("DOMContentLoaded", () => {

    // Set timestamp into hidden field ONLY IF the field exists (form page only)
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Thankyou.html result display
    const resultsBox = document.querySelector("#results");
    if (!resultsBox) return; // prevents running on the form page

    const query = new URLSearchParams(window.location.search);

    resultsBox.innerHTML = `
        <h2><strong>Thank You for Your Application!</strong></h2>
        <p>We have received your application with the following details:</p>
        <p>First Name: ${query.get("firstName")}</p>
        <p>Last Name: ${query.get("lastName")}</p>
        <p>Your phone: ${query.get("mobile")}</p>
        <p>Your email: ${query.get("email")}</p>
        <p>Business name: ${query.get("orgName")}</p>
        <p><strong>Submitted at: <span id="submittedTime"></span></strong></p>
    `;

    // Insert timestamp properly
    const submittedTime = document.getElementById("submittedTime");
    submittedTime.textContent = new Date().toLocaleString();
});


// DIALOG SETUP FUNCTION 
function setupDialog(openBtnId, dialogId) {
    const openBtn = document.getElementById(openBtnId);
    const dialog = document.getElementById(dialogId);

    if (!openBtn || !dialog) return;

    // OPEN DIALOG BOX
    openBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    // CLOSE DIALOG BOX
    dialog.querySelector(".close-btn").addEventListener("click", () => {
        dialog.close();
    });

    // Click outside dialog closes it
    dialog.addEventListener("click", (event) => {
        const dialogRect = dialog.getBoundingClientRect();
        const inside =
            event.clientX >= dialogRect.left &&
            event.clientX <= dialogRect.right &&
            event.clientY >= dialogRect.top &&
            event.clientY <= dialogRect.bottom;

        if (!inside) dialog.close();
    });
}

// CALL ALL DIALOGS BOXES
setupDialog("npBtn", "npMember");
setupDialog("bronzeBtn", "bronzeMember");
setupDialog("silverBtn", "silverMember");
setupDialog("goldBtn", "goldMember");