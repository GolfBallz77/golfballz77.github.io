function checkPassword() {
    const correctPassword = "TheGolfClubIsForTheElites"; // Replace with your desired password
    const passwordInput = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (passwordInput === correctPassword) {
        window.location.href = "WIPIndex.html"; // Redirect to your main page
    } else {
        errorMessage.textContent = "Incorrect!";
    }
}
