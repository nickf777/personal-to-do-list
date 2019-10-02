let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

let remaining = 0;
document.getElementById("remaining").innerHTML = `You have ${remaining} things left on your list! Get to work :)`

let button = document.getElementById("checkmark")

let colorChange = function() {
    button.style.backgroundColor = "#4bb93f"
}
button.addEventListener("click", colorChange);

let task = document.getElementById("task")

