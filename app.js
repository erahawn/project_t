var toDoItems = [];

function getValue() {
	//hämtar värdet från textrutan och sparar i variabeln - theItem
	var theItem = document.getElementById('enter').value;

	//stoppas om stängen är tom
	if (theItem == '' || theItem.length == 0) {
		return false;
	}
	//pushar in theItem i våran array
	toDoItems.push(theItem);
	alert(toDoItems);
	//visar children av vår <div> i html?? osäker på hur den här delen fungerar exakt.
	console.log(document.getElementById('list').children);
	document.getElementById('list').innerHTML +=
		'<li>' + toDoItems[toDoItems.length - 1] + '</li>';

	//Clears input text
	document.getElementById('enter').value = '';
	// Focuses on input field
	document.getElementById('enter').focus();
}

function deletebutton() {
	console.log('deletebutton ran!');
	toDoItems = [];
	list.innerHTML = '';
	/* while (list.firstChild) {
        list.removeChild(list.firstChild);
    } */
}

/*

var toDoItems = [];

function getValue() {
    //hämtar värdet från textrutan och sparar i variabeln - theItem
    var theItem = document.getElementById('enter').value;
}
//stoppas om stängen är tom
if (theItem == '' || theItem.length == 0) {
    return false;
}
//pushar in theItem i våran array
toDoItems.push(theItem);
//visar children av vår <div> i html?? osäker på hur den här delen fungerar exakt.
document.getElementById('list').children[0].innerHTML +=
    '<li>' + toDoItems[toDoItems.length - 1] + '</li>';

//Clears input text
document.getElementById('enter').value = '';
// Focuses on input field
document.getElementById('enter').focus();
//deletebutton, does'nt loop. But it removes everything in the list.
function deletebutton() {
    console.log('deletebutton ran!');
    //toDoItems = [];
    while (toDoItems > -1) {
        toDoItems.pop;
    }
}

// function updateDom() {
//  while(ul.firstChild) {
//      ul.removeChild(ul.firstChild)
//  }

//DEN ANDRA KODEN

// //Add items to our list
// toDoItems = [];
// let name = '';

// function addItem(x) {
//  var toDo = [ x, (bought = false) ];
//  toDoItems.push(toDo);

//  alert('The list contains ' + toDoItems);
//  clearInterval(toDo);
// }

// function getValue() {
//  var y = document.getElementById('item');
//  var x = document.getElementById('form').value;
//  y.innerHTML = x;
//  addItem(x);
// }

// getValue();

/*Toms kod:
        var myArray = ["hej", "hej2", "hej3"];

        const ul = document.querySelector("ul");
        //ul.remove();

        const form = document.querySelector("form");

        const input = document.querySelector("input");

        function updateDom() {
            while(ul.firstChild) {
                ul.removeChild(ul.firstChild)
            }
            for(let i = 0; i < myArray.length; i += 1){
                const li = document.createElement("li");
                li.textContent = myArray[i];
                li.classList.add("todo-item")
                ul.appendChild(li);
            }
        }

        updateDom();

        form.addEventListener("submit", (e) =>{
            e.preventDefault();
            const newTodo = input.value;
            myArray.unshift(newTodo);
            input.value = "";
            updateDom();
        });

        const items = document.querySelectorAll("li");

        ul.addEventListener("click", e =>{
                console.log("item clicked");
                //console.log(e);
                //console.log(e.target);
                //console.log(item);
                //e.target.style.textDecoration = "line-through";
                if(e.target.classList.contains("todo-item")) {
                    e.target.remove();
                }

        });
        */
