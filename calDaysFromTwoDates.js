 var d1 = new Date("01/30/2019"); 
var d2 = new Date("07/30/2019"); 

var diff = d2.getTime() - d1.getTime();

console.log(diff);

var days = diff/(1000 * 3600 * 24);
console.log(days);