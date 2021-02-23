function merge(arr1, arr2){
    var mergeArr = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr2[j] != -1 && arr1[i] != -1){
                if(arr2[j] > arr1[i]){
                    mergeArr.push(arr1[i])
                }else{
                    mergeArr.push(arr2[j]);
                }
            }
        }
        console.log(mergeArr);
    }
    console.log(arr1);
}
var arr1 = [2, 8, -1, -1, -1, 13, -1, 15, 20];
var arr2 = [5, 7, 9, 25];
merge(arr1, arr2);
//output [2 5 7 8 9 13 15 20 25]