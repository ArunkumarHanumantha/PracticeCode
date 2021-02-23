// function bubbleSort(arr, swap){
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
           
//             var str1 = arr[j];
//             var str2 = arr[j + 1];
//             var comNum = str1.localeCompare(str2);
//             if(comNum != -1)
//             {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
  
//     }
//     return arr;
// }

function bubbleSort(arr, swap){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
           
            var str1 = arr[j];
            var str2 = arr[j + 1];
            if(str2 < str1)
            {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
  
    }
    return arr;
}

bubbleSort([8, 22, 7, 9, 31, 5, 13], false)
//console.log(bubbleSort(['ab','ak', 'ac', 'ag', 'divakar', 'pooja', 'tejaswini'], false))