document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("profile-form");
    const responseMessage = document.getElementById("response-message");

    // Load profile from local storage if it exists
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
        document.getElementById("name").value = savedProfile.name || "";
        document.getElementById("email").value = savedProfile.email || "";
        document.getElementById("dob").value = savedProfile.dob || "";
    }

    // Save profile to local storage on form submission
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const dob = document.getElementById("dob").value;

        // Password confirmation validation
        if (password !== confirmPassword) {
            responseMessage.textContent = "Passwords do not match!";
            return;
        }

        // Save profile data
        const profileData = { name, email, dob };
        localStorage.setItem("userProfile", JSON.stringify(profileData));

        responseMessage.textContent = "Profile saved successfully!";
    });
});
