let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

let remaining = 0;
document.getElementById("remaining").innerHTML = `You have ${remaining} things left on your list! Get to work :)`

let button = document.getElementById("checkmark");

const colorChange = function() {
    button.style.backgroundColor = "#2FD81B";
};

button.addEventListener("click", colorChange);

