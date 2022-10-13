const input = require('readline-sync');

// create our node manager menu
let tasksMenu =['Welcome to your task manager, Press:', 
'1. to see all your tasks',
'2. to add a task',
'3. to delete a task',
'4. to mark a task as done',
'5. to Exit the task manager'];

let tasksList = ['task', 'task2', 'task3'];

// show menu manager
const displayMenu = () => {
    for (taskMenu of tasksMenu) {
        console.log(taskMenu)
    }
}

// displaying task list 
const displaTasks = () => {
    for (taskList of tasksList) {
        console.log(taskList);
    }
}

// adding new tasks 
const addTask = () => {
    let newTask = input.question('Please add new task: ');
tasksList.push(newTask);
console.log(tasksList)
}

// delete task from the list
const deleteTask = () => {
  
        let delTask = Number(input.question('Please select task to delete: ')) -1;
            tasksList.splice(delTask, 1);
          console.log(tasksList);
}


// mark task as done
const doneTask = () => {
let checkedTask = Number(input.question('Please select task as finished: '))
tasksList.push(checkedTask + true);
console.log(tasksList);
}

// manager application 
const manager = () => {

}


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