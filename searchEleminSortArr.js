var searchInsert = function(nums, target) {
    if(nums.length > 0){
        var i = 0;
        if(nums.indexOf(target) != -1){
            return nums.indexOf(target);
        }else{
         var insertPos = i;
         while(i < nums.length){
            if(target > nums[i]){
              insertPos++;
            }
            i++;
        }
        return insertPos;   
      }
    }else{
        return nums.length;
    }
};

searchInsert([1,3,5,6,80], 83)