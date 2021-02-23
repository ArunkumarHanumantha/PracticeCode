var car = {
    'name' : 'tayota'
}

function displayCarDetails(color){
    console.log(this.name+' '+color);
}

displayCarDetails.call(car, 'red');
displayCarDetails.apply(car, ['red']);
var boundFn = displayCarDetails.bind(car);
console.log(boundFn.name);