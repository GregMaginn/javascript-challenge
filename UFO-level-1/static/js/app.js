// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", sortTable);
form.on("submit",sortTable);

function sortTable () {
    //stops page from refreshing
    d3.event.preventDefault();

    //assign user input to var
    var userInput = d3.select("#date-input");

    var inputValue = userInput.property("value");
    
};