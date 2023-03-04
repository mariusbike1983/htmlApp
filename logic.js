window.addEventListener('load', function() {

    [...document.getElementsByClassName('todo-item')].forEach(d => {
        d.addEventListener('click', handleClickOnItem);
    });
    
	document.getElementById('add-button').addEventListener('click', function() {
		const todoText = prompt("What do you plan on doing?");
		const when = prompt("And when do you plan on doing "+todoText+"?");
        const newItem = document.createElement("div");
		newItem.classList.add("todo-item");
		newItem.innerText = todoText;

		const detail = document.createElement("span");
		detail.classList.add("detail");
		detail.innerText = when;

		newItem.appendChild(detail);
		newItem.addEventListener('click', handleClickOnItem);

		const inProgressList = document.getElementById('current-todo-list');
		inProgressList.appendChild(newItem);
    });
});

function handleClickOnItem(event) {
	const currentItem = event.target;
	const completedList = document.getElementById('completed-todo-list');
	const inProgressList = document.getElementById('current-todo-list');
	if (currentItem.parentElement === completedList) {
		inProgressList.appendChild(currentItem);
	} else {
		completedList.appendChild(currentItem);
	}
};