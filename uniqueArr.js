var removeDuplicates = function(arr) {
   var i  = 0;
   while(i < arr.length){
       for(var k = i + 1; k < arr.length; k++){
           if(arr[i] === arr[k]){
               var elem = arr.splice(k, 1);
               arr[i] = elem[0];
               --k;
               //console.log(arr);
           }

       }
       i++;     
   }
   return arr;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
