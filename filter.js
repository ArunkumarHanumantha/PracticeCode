var songs = [
    {
        id : 1, 'name' : 'sariyagi', 'Movie' : 'mungaru male2'
    },
    {
        id : 2, 'name' : 'yethake', 'Movie' : 'Bell Bottom'
    },
    {
        id : 3, 'name' : 'Helade Kelade', 'Movie' : 'Geetha'
    },
    {
        id : 4, 'name' : 'Dorasani', 'Movie' : 'Pailwan'
    }
]

//filter method of array creates new arrray will calling function which return expression true/false
// it returns new array by removing element of an original array
// if false then it does not add to array or add

var newArray = songs.filter(function(value, index, OriginalArray){
    return value.id == 1;
});

//ES6
var newArray = songs.filter((value, index, originalArray) => {
    return value.name == 'yethake';
})

console.log(songs);
console.log(newArray);


//return substring in string array

var songsNew = ['yethake', 'rajkumar', 'tagole', 'yarige', 'collegekumar'];
var newArr = songsNew.filter((value, index, originalArray) => {
    return value.includes('kumar');
})
console.log(songsNew);
console.log(newArr);