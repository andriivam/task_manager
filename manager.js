const input = require("readline-sync");

// create our node manager menu
let tasksMenu = [
  "Welcome to your task manager, Press:",
  "1. to see all your tasks",
  "2. to add a task",
  "3. to delete a task",
  "4. to mark a task as done",
  "5. to Exit the task manager",
];

// create task list and add some default values
let tasksList = ["task", "task2", "task3"];

// show menu manager
const displayMenu = () => {
  for (taskMenu of tasksMenu) {
    console.log(taskMenu);
  }
};

// displaying task list
const displayTasks = () => {
  for (task of tasksList) {
    console.log(task);
  }
};

// adding new tasks
const addTask = () => {
  let newTask = input.question("Please add new task: ");
  tasksList.push(newTask);
  console.log(tasksList);
};

// delete task from the list
const deleteTask = () => {
  let delTask = Number(input.question("Please select task to delete: ")) - 1;
  tasksList.splice(delTask, 1);
  if (delTask > tasksList.length) {
    return null;
  }
  console.log(tasksList);
};

// mark task as done
const doneTask = () => {
  let numOfTask = Number(input.question("Please select a task as done: ")) - 1;
  let checkedTask = Boolean(input.question("Confirm if it is done: "));
  tasksList.splice(numOfTask, 1, checkedTask);
  console.log(tasksList);
};


// manager application
const manager = () => {

let menuStart = 1;
  while (menuStart === 1) {
    displayMenu();
    menuStart--;
    let i = 0;
    let action = Number(input.question("Select what you want to do it: "));
    i = action;
  }
  if (i === 1) {
    displayTasks();
  } else if (i === 2) {
    addTask();
  } else if (i === 3) {
    deleteTask();
  } else if (i === 4) {
    doneTask();
  } else if (i === 5) {
    
  }
};


/*
// adding new task
fs.writeFile('tasks.json', 'red a book', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  // delete tasks
   fs.unlink('tasks.json', 'red a book', function (err) {
     if (err) throw err;
     console.log('File deleted!');
  });
  */
