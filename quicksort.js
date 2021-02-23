// function swap(arr, i, j){
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return arr;
// }

// function Pivot(arr, start = 0, end = arr.length - 1){
//     let pivot = arr[start];
//     let swapIndex = start;
//     for(var i = start + 1; i < arr.length; i++){
//         if(pivot > arr[i]){
//             swapIndex++;
//             swap(arr, swapIndex, i);
//         }
//     }
//     swap(arr, start, swapIndex);
//     return swapIndex;
// }

// function quickSort(arr, left = 0, right = arr.length - 1){
//     if(left < right){
//      var pivotIndex = Pivot(arr, left, right);
//     //left array sorting
//     quickSort(arr, left, pivotIndex - 1);
//     //right array sorting
//     quickSort(arr, pivotIndex + 1,right)   
//     return arr;
//     }
// }

//mithun implementation 
function quickSort(arr){
    if(arr.length <= 0){
        return arr;
    }

    var left = [];
    var right = [];
    var pivot = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(pivot > arr[i]){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    console.log(left);
    console.log(right)
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([4,8,2,1,5,7,6,3]));