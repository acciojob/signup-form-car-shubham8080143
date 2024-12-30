// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        // Perform validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const genderM = document.getElementById("gender_m").checked;
        const genderF = document.getElementById("gender_f").checked;
        const cars = document.getElementById("cars").value;
        const age = document.getElementById("age").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const password = document.getElementById("password").value.trim();
        const tos = document.getElementById("tos").checked;

        // Check if all required fields are filled
        if (!name || !email || (!genderM && !genderF) || !cars || !age || !dob || !password || !tos) {
            alert("Please fill out all required fields and agree to the Terms of Service.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Age validation
        if (age <= 0) {
            alert("Please enter a valid age.");
            event.preventDefault();
            return;
        }

        // Password validation (example: minimum 6 characters)
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        // If everything is valid
        alert("Signup successful!");
    });

    // Add real-time input validation (example: phone number format)
    const phoneInput = document.getElementById("tel");
    phoneInput.addEventListener("input", function () {
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/; // Format: xxx-xxx-xxxx
        if (!phonePattern.test(phoneInput.value) && phoneInput.value.length > 0) {
            phoneInput.style.borderColor = "red";
        } else {
            phoneInput.style.borderColor = "";
        }
    });
});

