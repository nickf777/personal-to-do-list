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
    } else {
      alert("What do you have to do today?")
    }
    document.getElementById("item").value = "";
})

function addItemTodo(text) {
  let item = document.createElement("li");
  item.classList.add("listitem")
  item.innerText = text;

  let list = document.getElementById("todo");
  list.appendChild(item);

  let completeButton = document.createElement("button");
  completeButton.classList.add("done");
  item.appendChild(completeButton);

  //Completing a task on clikc

  completeButton.addEventListener("click", moveToComplete)

  let completeButtonImage = document.createElement("img");
  completeButtonImage.classList.add("completeimage")
  completeButton.appendChild(completeButtonImage);

  remaining++;
}

//Completing a Task
function moveToComplete() {
  let item = this.parentNode;
  let parent = this.parentNode.parentNode;
  let completeList = document.getElementById("complete_list");

  parent.removeChild(item);
  completeList.appendChild(item);
}


