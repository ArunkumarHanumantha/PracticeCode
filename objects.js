var ob = {
    'name' : 'arun'
}

var ob2 = Object.freeze(ob); // freeze prevents new property from being added to it. 
ob2.name = 'arunkumar';
console.log(ob2.name);

var obj = {
    prop : function(){ return 'arun'},
    name : 'original'
}
console.log(obj);
delete obj.prop;
console.log(obj);
var obj2 = Object.freeze(obj);
obj2.name = 'new name';
console.log(obj2.name);

var object1 = {
    a : 1, b : 2, c : 3
}
var object2 = Object.assign({d : 4, c : 5}, object1);
console.log(object2.c);
