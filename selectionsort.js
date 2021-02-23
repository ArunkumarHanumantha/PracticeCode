function selectionSort(arr){
   for(var i = 0; i < arr.length; i++){
       var min = i;
       console.log(arr);
       for(var j = i+1; j < arr.length; j++){
           if(arr[j] < arr[min]){
            min = j;
           }
       }
       var temp = arr[i];
       arr[i] = arr[min];
       arr[min] = temp;
   }
}

selectionSort([19, 44, 38, 5, 47, 15]);