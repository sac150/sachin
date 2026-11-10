
// Welcome message
console.log("Welcome to my portfolio!");

// Show a message when someone clicks the button
function sayHello() {
    alert("Hello! Thanks for visiting my portfolio 😊");
}

// Update the footer year automatically
const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Your Name. All rights reserved.`;
