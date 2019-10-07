//Footer functionality

let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

let remaining = 0;
document.getElementById("remaining").innerHTML = `You have ${remaining} things left on your list! Get to work :)`


//Submitting the Form

document.getElementById("add").addEventListener("click", function() {
    let value = document.getElementById("item").value;  
    if (value) {
      addItemTodo(value);
    }
    document.getElementById("item").value = "";
})

function addItemTodo(text) {
  let item = document.createElement("li");
  item.innerText = text;
  let list = document.getElementById("todo");
  list.appendChild(item);
  remaining++;




}