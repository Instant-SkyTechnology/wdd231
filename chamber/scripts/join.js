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






