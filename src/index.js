document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('LOAD THAT DOM')

  const mainContent = document.querySelector("#main-content")
  console.log(mainContent)

  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.target)

    const taskDescription = document.querySelector("#new-task-description").value
    const p = document.createElement('p')
    mainContent.innerText = taskDescription
    form.reset()
    console.log(e.target)

    // document.getElementById("tasks").add
   });
   // <ul id="tasks">
   //  </ul>
});
