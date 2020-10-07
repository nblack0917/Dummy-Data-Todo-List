const nextButton = document.getElementById("nextButton")
x = 20;
i = 0

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut statem",
    "completed": false
  }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

const logTodos = () => {
    console.log(arrayOfTodos)
  }

const populateTodos = () => {
  if (x <= 180){
    document.getElementById("nextButton").style.display = "block"
  } else {
    document.getElementById("nextButton").style.display = "none"
  }
  for(i; i < x; i++) {
      let orderedList = document.getElementById("todo-list");
      const newLI = document.createElement("LI");
      orderedList.appendChild(newLI);
      let newContent = document.createTextNode(arrayOfTodos[i].title);
      newLI.appendChild(newContent)

      if (!arrayOfTodos[i].completed) {
        newLI.style.color = "red"
        newLI.style.fontWeight = "600"
      } else {
        newLI.style.color = "green"
      }
  }
  x = x + 20;
}


