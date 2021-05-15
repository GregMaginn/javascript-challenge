// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// add a new row for every entry in data
tableData.forEach(entry => {
    var row = tbody.append('tr');
    //add a new cell and append the data into it
    Object.values(entry).forEach(value => {
        var cell = row.append('td')
        cell.text(value)
    })
});

var button = d3.select('#filter-btn');
var form = d3.select('#form')

button.on('click', handleClick);
form.on('click', handleClick);

function handleClick(){
    //default is to refresh, stop that
    d3.event.preventDefault();

    var userInput = d3.select("#datetime");
    var inputValue = userInput.property("value");

    var userFilter = tableData.filter(a => a.datetime === inputValue)

    //clear previous table
    tbody.html('');

    userFilter.forEach(datetime => {
        row = tbody.append('tr');
        Object.values(entry).forEach(value => {
            var cell = row.append('td');
            cell.text(value);

    });
    }
}


