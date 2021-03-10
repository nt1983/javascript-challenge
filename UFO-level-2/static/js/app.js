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
button.on("submit",runenter);

function runenter(){
    d3.event.preventDefault();
    var inputDate=d3.select("#datetime").property("value").trim();
    var inputCity=d3.select("#city").property("value").trim();
    var inputState=d3.select("#state").property("value").trim();
    var inputCountry=d3.select("#country").property("value").trim();
    var inputShape=d3.select("#shape").property("value").trim();
    var filterdata=tableData;
    if (inputDate) {
        filterdata=tableData.filter(filterValue => filterValue.datetime===inputDate);
    }
    if (inputCity) {
        filterdata=filterdata.filter(filterValue => filterValue.city===inputCity);
    }
    if (inputState) {
        filterdata=filterdata.filter(filterValue => filterValue.state===inputState);
    }
    if (inputCountry) {
        filterdata=filterdata.filter(filterValue => filterValue.country===inputCountry);
    }
    if (inputShape) {
        filterdata=filterdata.filter(filterValue => filterValue.shape===inputShape);
    }

    d3.selectAll("td").remove();
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