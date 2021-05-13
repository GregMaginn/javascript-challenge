// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");
console.log(button)
// Select the form
var form = d3.select("#form");
console.log(form)
// Create event handlers 
button.on("click", sortTable);
form.on("submit", sortTable);

function sortTable () {
    //stops page from refreshing
    d3.event.preventDefault();

    //assign user input to var
    var userInput = d3.select("#datetime");

    //get value from userInput
    var inputValue = userInput.property("value");

    console.log(userInput);
    console.log(tableData);

};
