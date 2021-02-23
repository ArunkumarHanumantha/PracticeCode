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

//map method of Array returns new array with calling a function for each element of an array
// if we want to get the particular property of an object to array then we can use Map function of an array

// convert songs array to array of songs string

var newArray = songs.map(function (value, index, OriginalArray){
    return value.name;
});

//ES6
var newArray = songs.map((value, index, OriginalArray) => {
    return value.name;
})

//applying using util function
var newArray = songs.map(getSongName);

function getSongName(value){
    return value.name.toLowerCase();
}

//transforming the object by removing song and adding new song to the object
// var newArray = songs.map(function(song){
//     var remOld = _.omit(song, 'Movie');
//     return Object.assign(remOld, {
//         name : 'Kanmaniye',
//         Movie : 'Pailwan'
//     })
// })

console.log(songs)
console.log(newArray);