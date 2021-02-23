// function insertionSort(arr){
//     for(var i = 1; i < arr.length; i++){
//         var currentVal = arr[i];
//         for(var j = i - 1; j >= 0; j--){
//             if(arr[j] > currentVal)
//             {
//                 console.log(arr);
//                 arr[j + 1] = arr[j];
//                 console.log(arr);
//             }
//         }
//         arr[j + 1] = currentVal;
//         console.log(arr);
//     }
// }

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        for(var j = 0; j < i; j++){
            console.log(arr);
            if(arr[i] < arr[j]){
                var temp = arr.splice(i, 1);
                arr.splice(j, 0, temp[0]);
            }
        }
    }
    return arr;
}

var i = insertionSort([2,3,1,7,4,6]);
console.log(i);