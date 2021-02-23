var pros = [{ title: "C++", author: "Bjarne" }, 
    { title: "Java", author: "James" }, 
    { title: "Python", author: "Guido" }, 
    { title: "Java", author: "James" }, 
];

// var newObj = {};
// for(var i in pros){
//     var objName = pros[i]['title'];
//     newObj[objName] = pros[i];
// }

// var newArr = [];
// for(var i in newObj){
//     newArr.push(newObj[i]);
// }

// console.log(newArr);

var jsonObj = pros.map(JSON.stringify);

console.log(jsonObj);

var newSet = new Set(jsonObj);
console.log(newSet);
var newA = Array.from(newSet).map(JSON.parse);
console.log(newA);