function rotate(arr){
    /*var temp;
    var start = 0;
    var end = arr.length - 1;
    while(start < end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    console.log(arr);*/
  var x = arr[arr.length - 1];
  var first = arr[0];
  for(var i = arr.length - 1; i > 1; i--){
      arr[i] = arr[i - 1];
      arr[0] = x;
      console.log(arr);
  }
  arr[i] = first;
    console.log(arr);
}
rotate([1,2,3,4,5,6,7,8]);