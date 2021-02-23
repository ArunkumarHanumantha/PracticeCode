var threeSum = function(nums) {
    var set = new Set();
    var newSet = new Set();
    for(var i = 0; i < nums.length - 2; i++){
        var j = i + 1;
        var k = j + 1;
        while(j < nums.length - 1)
        {
            if(nums[i] + nums[j] + nums[k] === 0)
            {
                   var results = [nums[i], nums[j], nums[k]];
                   var str = nums[i] +','+ nums[j]+':'+nums[k];
                   if(!newSet.has(str)){
                       newSet.add(str);
                       set.add(results)
                   }
               }
               j++;
               k++
        }
    }
    var final = [];
    for(let val of set){
        final.push(val);
    }
    return final;
};

threeSum([-1, 0, 1, 2, -1, -4]);