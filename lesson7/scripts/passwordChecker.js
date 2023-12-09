// password checker

function passwordChecker() {
    let userInput = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (userInput.length < 8) {
        result.style.display = "block";
        result.style.color = "red";
        result.innerHTML = "Password must be at least 8 characters long";
    }

    else if (userInput.length >= 8) {
        result.style.display = "block";
        result.style.color = "green";
        result.innerHTML = "Password is valid";
    }
}