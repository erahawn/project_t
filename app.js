var toDoItems = [];

function getValue() {
	//hämtar värdet från textrutan och sparar i variabeln - theItem
	var theItem = document.getElementById('enter').value;

	//stoppas om stängen är tom
	if (theItem == '' || theItem.length == 0) {
		return false;
	}

	{
		//pushar in theItem i våran array
		toDoItems.push(theItem);
		//visar children av vår <div> i html?? osäker på hur den här delen fungerar exakt.
		document.getElementById('list').children[0].innerHTML +=
			'<li>' + toDoItems[toDoItems.length - 1] + '</li>';
	}

	// 	 Clears input text
	//     document.getElementById('form').value = ''
	//     // Focuses on input field
	//     document.getElementById('form').focus();
	// ska ligga i funktionen getValue

	// function deletebutton() {
	// 	console.log(“deletebutton ran!“)
	// 	toDoItems = [];
	//  }
	//  <div>
	// 		<button id=“deletebutton” onclick=“deletebutton()“> Radera! </button>
	// 	</div>

	//DEN ANDRA KODEN

	// //Add items to our list
	// toDoItems = [];
	// let name = '';

	// function addItem(x) {
	// 	var toDo = [ x, (bought = false) ];
	// 	toDoItems.push(toDo);

	// 	alert('The list contains ' + toDoItems);
	// 	clearInterval(toDo);
	// }

	// function getValue() {
	// 	var y = document.getElementById('item');
	// 	var x = document.getElementById('form').value;
	// 	y.innerHTML = x;
	// 	addItem(x);
	// }

	// getValue();
}
