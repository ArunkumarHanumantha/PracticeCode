function rotateArr(arr, k){
    var temp;
    for(var i = 0; i <= k - 1; i++){
        var m = 0;
        var len = arr.length - 1;
        while(m < len){
            var n = m + 1;
            temp = arr[m];
            arr[m] = arr[n];
            arr[n] = temp;
            m++;
        }
    }
    console.log(arr);
}

rotateArr([1,2,3,4,5,6,7,8,9], 3);
//output 3,4,5,1,2