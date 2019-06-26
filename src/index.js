document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('LOAD DOM')

  const mainContent = document.querySelector("#main-content")
  console.log(mainContent)

  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const taskDescription = document.querySelector("#new-task-description").value
    //Begin due date
    const dueDate = document.querySelector("#due-date").value
    let y = " "
    if (dueDate != "2019-06-26") {
      y = "  (PAST DUE!!!) ".fontcolor("red");
    }
    //Bug: puts past due for items due in future
    //End due date
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    //Begin priority
    const prioritySelection = document.querySelector("#priority-selection").value
    let x = 0
    if (prioritySelection === "high-priority"){
      x = taskDescription.fontcolor("red");
    }
    if (prioritySelection === "medium-priority"){
      x = taskDescription.fontcolor("#FFE05E");
    }
    if (prioritySelection === "low-priority"){
      x = taskDescription.fontcolor("green");
    }
    //End priority
    //List display
    deleteButton.innerText = "X"
    li.innerHTML = x + ": " + dueDate + y
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(e){
      li.remove();
    })

    document.getElementById('tasks').appendChild(li)

    console.log(taskDescription)
    form.reset();
    console.log(e.target)

   });


});
