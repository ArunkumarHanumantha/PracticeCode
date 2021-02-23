var rotate = function(nums, k) {
    var lVal = k + 1;
    if(nums.length % k == 0){
        lVal = k;
    }
    var i = 0;
    for(var j = lVal; j < nums.length; j++){
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        console.log(nums);
        i++;
    }
    var spliceElem = nums.length > 1 ? nums.splice(k, 1)[0] : nums.splice(i, 1)[0];
    nums.push(spliceElem);
};

rotate( [1,2],0);