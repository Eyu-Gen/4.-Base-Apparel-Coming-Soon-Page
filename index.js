let button = document.getElementById("sendBtn");
let email = document.getElementById("email");
let errorImage = document.getElementById("errorImg");
let error = document.getElementById("error");
let reEnter = document.getElementById("reEnter");
let emailClicked = true;

button.addEventListener("click", function() {
    let emailValue = email.value.trim();
    if (emailValue === "") {
        reEnter.style.display = "block";
        errorImage.style.display = "block";
        emailClicked = false;
    } else if (!checkEmail(emailValue)) {
        errorImg.style.display = "block"; 
        error.style.display = "block";
        emailClicked = false;
    } else {
        alert("Email sent successfully!");
    }
});

email.addEventListener("click", function() {
    emailClicked = true;
    reEnter.style.display = "none";
    errorImage.style.display = "none";
    error.style.display = "none";
});

function checkEmail(emailValue) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);
}
