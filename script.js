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
  for(let i = 0; i < arrayOfTodos.length; i++) {
      let orderedList = document.getElementById("todo-list");
      const newLI = document.createElement("LI");
      orderedList.appendChild(newLI);
      let newContent = document.createTextNode(arrayOfTodos[i].title);
      newLI.appendChild(newContent)

      if (!arrayOfTodos[i].completed) {
        newLI.style.color = "red"
      } else {
        newLI.style.color = "green"
      }
  }
}