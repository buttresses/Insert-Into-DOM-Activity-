function addItem() {
  // TODO: add 'item' to the list of TODOs
  let i = document.getElementById('myInput').value;
 


  //Step 1: identify the value of the myInput element. 

  //Step 2: Create a text node containing that value
 let ia = document.createTextNode(i);
  //Step 3: Create a new li element and append the text node to it
  let newElements = document.createElement('li');
  //Step 4: Append the li element to the existing myTODOs element. 
newElements.appendChild(ia);
  document.getElementById('myTODOs').appendChild(newElements);
document.getElementById('myInput').value = '';
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
}
