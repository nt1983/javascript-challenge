// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");
tableData.forEach(function(ufodata){
    console.log(ufodata);
    var row=tbody.append("tr");
    Object.entries(ufodata).forEach(function([key, value]){
        var cell=row.append("td");
        cell.text(value);
    });
});

var button=d3.select("#filter-btn");
button.on("click",runenter);

function runenter(){
    d3.event.preventDefault();
    var inputElement=d3.select("#datetime");
    var inputValue=inputElement.property("value");
    console.log(inputValue, typeof inputValue);
    var filterdata=tableData.filter(filterValue => filterValue.datetime===inputValue);
    d3.selectAll("tr").remove();
    console.log(filterdata);
    filterdata.forEach(function(ufodata){
        console.log(ufodata);
        var row=tbody.append("tr");
        Object.entries(ufodata).forEach(function([key, value]){
            var cell=row.append("td");
            cell.text(value);
        });

    });

};