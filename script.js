const taskInput = document.querySelector('#taskInput')
const addButton = document.querySelector('#addButton')
const taskList = document.querySelector('#taskList')

addButton.addEventListener('click',function(){

    const taskText = taskInput.value
    if (taskText !==''){
       const li =document.createElement('li')
       li.classList.add('task')
       const span = document.createElement('span')
       span.classList.add('task__task-description')
       span.textContent = taskText
       li.appendChild(span)
    
        const removeButton= document.createElement('button')
        removeButton.classList.add('task__complete-task-button')

        const i = document.createElement('i')
        i.classList.add('ri-checkbox-line','task__complete-task-icon')

        removeButton.appendChild(i)

        li.appendChild(removeButton)

       taskList.appendChild(li)

        taskInput.value = ''

       removeButton.addEventListener('click',function(){
        li.remove()
       })
    }
    
})