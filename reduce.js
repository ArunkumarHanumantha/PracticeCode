//reduce method takes an array and reduces it to single value
// filter, map and reduce methods are same but differs in arguments list

var arr = [1, 2, 3, 4, 5, 6];

var sum = arr.reduce(function(acc, curValue, index, originalArray){
    return acc + curValue;
}, 2)

console.log(sum);

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
];

const mult = [songs, [{id : 5, name : 'pilla', 'Movie' : 'Businessman'}]];
var newMult = mult.reduce(function(acc, curValue, index, originalArray){
    return acc.concat(curValue);
}, [])
console.log(newMult);