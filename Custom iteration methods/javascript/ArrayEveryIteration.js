const nums = [1, 15, 2, 7, 3, 25, 12, 6, 9, 18, 27, 36, 56, 44, 17, 11];

function customEveryMethod(nums){
   for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if(element > 1){
        
    }
    else{
        return false
    }
   }
   return true;
}
console.log(customEveryMethod(nums))