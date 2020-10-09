const nextButton = document.getElementById("nextButton")
let x = 20;
let i = 0;
let list = [];
let completedList = [];
let completed = "all";

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

  let userArrayOfTodos = [];


const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

const logTodos = () => {
    console.log(arrayOfTodos)
    
  }

const clearList = () => {
  let orderedList = document.getElementById("todo-list");
  orderedList.innerHTML = "";
  document.getElementById("nextButton").style.display = "none"
  i = 0;
  x = 20;
  document.getElementById("toggleButton").innerHTML = "Filter";
}

const populateAllTodos = () => {
  clearList();
  populateTodos();
}

const populateTodos = () => {
  
  list = arrayOfTodos;
  if (x <= 180){
    document.getElementById("nextButton").style.display = "block"
  } else {
    document.getElementById("nextButton").style.display = "none"
  }
  for(i; i < x; i++) {
      let orderedList = document.getElementById("todo-list");
      const newLI = document.createElement("LI");
      orderedList.appendChild(newLI);
      newLI.classList.add(i);
      let newContent = document.createTextNode(arrayOfTodos[i].title);
      newLI.appendChild(newContent)

      if (!arrayOfTodos[i].completed) {
        newLI.style.color = "red"
        newLI.style.fontWeight = "600"
        const checkButton = document.createElement("button");
        checkButton.classList.add(i)
        checkButton.innerHTML = "Done?";
        // console.log(checkButton.className)
        checkButton.onclick = function () {
          arrayOfTodos[this.className].completed = true;
          // console.log(this.parentElement)
          this.parentElement.style.color = "green"
          this.parentElement.style.fontWeight = "400"
          this.style.display = "none"
        }
        newLI.appendChild(checkButton)
        
      } else {
        newLI.style.color = "green"
      }
  }
  x = x + 20;
}


const populateUserTodos  = () => {
  i = 0;
  x = 20;
  clearList();
  let b = document.getElementById("userID").value
  console.log(b)
  userArrayOfTodos = arrayOfTodos.filter(arrayOfTodos => arrayOfTodos.userId == b)
  list = userArrayOfTodos;
  console.log(userArrayOfTodos);
  for(i; i < x; i++) {
    let orderedList = document.getElementById("todo-list");
    const newLI = document.createElement("LI");
    orderedList.appendChild(newLI);
    newLI.classList.add(i);
    let newContent = document.createTextNode(userArrayOfTodos[i].title);
    newLI.appendChild(newContent)
  
    if (!arrayOfTodos[i].completed) {
      newLI.style.color = "red"
      newLI.style.fontWeight = "600"
      const checkButton = document.createElement("button");
      checkButton.classList.add(i)
      checkButton.innerHTML = "Done?";
      // console.log(checkButton.className)
      checkButton.onclick = function () {
        userArrayOfTodos[this.className].completed = true;
        // console.log(this.parentElement)
        this.parentElement.style.color = "green"
        this.parentElement.style.fontWeight = "400"
        this.style.display = "none"
      }
      newLI.appendChild(checkButton)
      
      } else {
        newLI.style.color = "green"
      }
  }
  x = x + 20;
}

const createList = () => {
  i = 0;
  x = 20;
  clearList();
  if (completedList.length > 20){
    document.getElementById("nextButton").style.display = "block"
  } else {
    document.getElementById("nextButton").style.display = "none"
  }
  for(i; i < x; i++) {
    if (i == completedList.length) { break; }
    let orderedList = document.getElementById("todo-list");
    const newLI = document.createElement("LI");
    orderedList.appendChild(newLI);
    newLI.classList.add(i);
    let newContent = document.createTextNode(completedList[i].title);
    newLI.appendChild(newContent)
  
    if (!completedList[i].completed) {
      newLI.style.color = "red"
      newLI.style.fontWeight = "600"
      const checkButton = document.createElement("button");
      checkButton.classList.add(i)
      checkButton.innerHTML = "Done?";
      // console.log(checkButton.className)
      checkButton.onclick = function () {
        completedList[this.className].completed = true;
        // console.log(this.parentElement)
        this.parentElement.style.color = "green"
        this.parentElement.style.fontWeight = "400"
        this.style.display = "none"
      }
      newLI.appendChild(checkButton)
      
      } else {
        newLI.style.color = "green"
      }
    }
    x = x + 20;
}

const toggleCompleted = () => {
  
  if (completed =="all") {
    console.log(completed)
    completed = false;
    console.log(completed)
    completedList = list.filter(list => list.completed == false)
    createList()
    document.getElementById("toggleButton").innerHTML = "Completed";
  } else if (completed == false) {
    console.log(completed)
    completed = true;
    console.log(completed)
    completedList = list.filter(list => list.completed == true)
    createList()
    document.getElementById("toggleButton").innerHTML = "All";
  } else if (completed == true || completed == false){
    console.log(completed)
    completed = "all"
    console.log(completed)
    i = 0;
    x = 20;
    clearList();
    document.getElementById("toggleButton").innerHTML = "Incomplete";
    for(i; i < x; i++) {
      let orderedList = document.getElementById("todo-list");
      const newLI = document.createElement("LI");
      orderedList.appendChild(newLI);
      newLI.classList.add(i);
      let newContent = document.createTextNode(list[i].title);
      newLI.appendChild(newContent)
    
      if (!list[i].completed) {
        newLI.style.color = "red"
        newLI.style.fontWeight = "600"
        const checkButton = document.createElement("button");
        checkButton.classList.add(i)
        checkButton.innerHTML = "Done?";
        // console.log(checkButton.className)
        checkButton.onclick = function () {
          list[this.className].completed = true;
          // console.log(this.parentElement)
          this.parentElement.style.color = "green"
          this.parentElement.style.fontWeight = "400"
          this.style.display = "none"
        }
        newLI.appendChild(checkButton)
        
        } else {
          newLI.style.color = "green"
        }
      }
      x = x + 20;
  }
}