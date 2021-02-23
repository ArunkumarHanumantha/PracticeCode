var majorityElement = function(nums) {
    var uniqueAr = [];
    var obj = {};
    for(var i = 0; i < nums.length; i++){
        if(!obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = 0;
        }
        obj[nums[i]]++;
    }
    var key; var max = 0;
    for(var i in obj){
       if(obj[i] > max){
           max = obj[i];
           key = i;
       }
    } 
    return key;
};

majorityElement([2,2,1,1,1,2,2,1,1,1,1])