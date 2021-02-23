var removeElement = function(nums, val) {
   for(var k = 0; k < nums.length; k++){
       if(val === nums[k]){
          nums.splice(k, 1);
           --k;
       }

   } 
   return nums;
};

removeElement([0,1,2,2,3,0,4,2], 2)
