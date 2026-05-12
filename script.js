function checkPassword() {
    const correctPassword = "BillyJeans1984"; // Replace with your desired password
    const passwordInput = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (passwordInput === correctPassword) {
        window.location.href = "billyjeans.html"; // Redirect to your main page
    } else {
        errorMessage.textContent = "Incorrect!";
    }
}
