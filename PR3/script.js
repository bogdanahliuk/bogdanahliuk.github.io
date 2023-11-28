let input = document.getElementById('userInputData');
let addBtn = document.getElementById('addBtn');
let toDoList = document.getElementById('toDoList');
let itemId = 0;
input.focus();

addBtn.addEventListener('click', ()=>{
    if(input.value == ''){
        input.placeholder = 'Type something here';
    }
    else{
        let item = document.createElement('li');
        let deleteBtn = document.createElement('button');
        item.textContent = input.value;
        deleteBtn.textContent = 'Delete';
        item.setAttribute('data-id', itemId);
        toDoList.appendChild(item);
        item.appendChild(deleteBtn);
        input.value = '';
        input.focus()

        deleteBtn.addEventListener('click', ()=>{
            let id = deleteBtn.parentNode.getAttribute('data-id');
            let itemToRemove = document.querySelector(`li[data-id="${id}"]`);
            toDoList.removeChild(itemToRemove);
        })
    }
    itemId++;
});

toDoList.addEventListener('click', (event)=>{
    if(event.target.tagName == 'LI'){
        let input = document.createElement('input');
        let saveBtn = document.createElement('button');
        let cancelBtn = document.createElement('button');
        let id = event.target.getAttribute('data-id');
        let itemToEdit = document.querySelector(`li[data-id="${id}"]`);
        let deleteBtn = itemToEdit.querySelector('button');
        itemToEdit.removeChild(deleteBtn);
        let text = itemToEdit.textContent;
        input.value = text;
        itemToEdit.textContent = '';
        itemToEdit.appendChild(input);
        saveBtn.textContent = 'Save';
        cancelBtn.textContent = 'Cancel';
        itemToEdit.appendChild(saveBtn);
        itemToEdit.appendChild(cancelBtn);
        input.focus();
        saveBtn.addEventListener('click', ()=>{
            text = input.value;
            itemToEdit.removeChild(input);
            itemToEdit.removeChild(saveBtn);
            itemToEdit.removeChild(cancelBtn);
            itemToEdit.innerHTML = text;
            itemToEdit.appendChild(deleteBtn);
        });
        cancelBtn.addEventListener('click', ()=>{
            itemToEdit.removeChild(input);
            itemToEdit.removeChild(cancelBtn);
            itemToEdit.removeChild(saveBtn);
            itemToEdit.innerHTML = text;
            itemToEdit.appendChild(deleteBtn);
        });
    }
});