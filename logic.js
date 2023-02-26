window.addEventListener('load', function() {

    [...document.getElementsByClassName('todo-item')].forEach(d => {
        d.addEventListener('click', handleClickOnItem);
    });
    
	document.getElementById('add-button').addEventListener('click', function(){
        alert('clicked the add button');
    });
});

function handleClickOnItem(event) {
	let currentItem = event.target;
	let completedList = document.getElementById('completed-todo-list');
	let inProgressList = document.getElementById('current-todo-list');
	if (currentItem.parentElement === completedList) {
		inProgressList.appendChild(currentItem);
	} else {
		completedList.appendChild(currentItem);
	}
};