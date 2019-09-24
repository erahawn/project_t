//Add items to our list
toDoItems = [];
let name = '';

function addItem(x) {
	var toDo = [ x, (bought = false) ];
	toDoItems.push(toDo);

	alert('The list contains ' + toDoItems);
	clearInterval(toDo);
}

function getValue() {
	var y = document.getElementById('item');
	var x = document.getElementById('form').value;
	y.innerHTML = x;
	addItem(x);
}

getValue();

//Confirm to do

// Checkbox

//Delete from list

//Delete all items from the list

/*
function removeAll() {
    document.getElementById('XXX').innerHTML = '';
}
*/

//List items//Delete all items from the list

/*
function removeAll() {
    document.getElementById('XXX').innerHTML = '';
}
*/

//List items
