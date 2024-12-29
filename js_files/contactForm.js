import { header } from "./shares/header.js";
header();
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("https://example.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert("Message sent successfully!");
            console.log(result);
            this.reset();
        } else {
            alert("Failed to send message. Please try again later.");
            console.error("Server Error:", response.status);
        }
    } catch (error) {
        alert("An unexpected error occurred. Please try again.");
        console.error("Error:", error);
    }
});
