var toDoItems = [];

function getValue() {
	/// retrieves the value from the text box and saves in the variable - theItem
	var theItem = document.getElementById('enter').value;
	// creating checkbox element
	//Is stopped if the string is empty
	if (theItem == '' || theItem.length == 0) {
		return false;
	}

	//push theItem into the array
	toDoItems.push(theItem);
	//display children of <ul> id = 'list'
	console.log(document.getElementById('list').children);
	document.getElementById('list').innerHTML +=
		'<li>' + toDoItems[toDoItems.length - 1] + '</li>';

	/*var list = document.getElementById('list');
	var checkbox = document.createElement('input');*/

	//Clears input text
	document.getElementById('enter').value = '';
	// Focuses on input field
	document.getElementById('enter').focus();
}

function deletebutton() {
	console.log('deletebutton ran!');
	toDoItems = [];
	list.innerHTML = '';
}

function kryssruta() {
	var checkBox = document.getElementById('myCheck');
	var checkmatt = document.getElementById('XXX');

	if (checkBox.checked == true) {
		text.style.display = 'block';
	} else {
		text.style.display = 'none';
	}
}

checkbox.type = 'DWADWAD';
checkbox.value = 'ndiwojdo';
checkbox.name = 'dwadaw';
checkbox.id = 'hduiwh';
