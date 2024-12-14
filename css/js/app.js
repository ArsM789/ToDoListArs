const inputTask = document.querySelector('#input-task');
const btnAdd = document.querySelector('#btn-add');
const listTask = document.querySelector('#list-task');

btnAdd.addEventListener('click', () => {
    const task = inputTask.value;
    if (task === "") {
        alert("Поле ввода пустое, введите задачу!");
      } else {  
        const li = document.createElement('li');
        li.textContent = task;
        li.classList.add('item-task');
        listTask.appendChild(li);
        inputTask.value = '';
        inputTask.focus();                
      }
});

listTask.addEventListener('click', (e) => {
    e.target.remove();  
});
