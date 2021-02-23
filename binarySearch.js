function binarySearch(arr, elem){
   if(arr.length > 0){
       var start = 0;
       var end = arr.length - 1;
       var middle = Math.round((start + end) / 2);   
       while(arr[middle] != elem && start <= end){
           if(elem < arr[middle]){
               end = middle - 1;
           }else{
               start = middle + 1;
           }
           middle = Math.round((start + end ) / 2);
       }
       return arr[middle] === elem ? middle : -1;
   }
}

var arr = [1, 4, 7, 19, 20, 30, 45, 56, 70];
var index = binarySearch(arr, 68);
console.log(index);