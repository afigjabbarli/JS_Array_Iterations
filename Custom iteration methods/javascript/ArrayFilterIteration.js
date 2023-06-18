const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const emptyArray = new Array();

function customFilterMethod(digits, emptyArray){
    for (let index = 0; index < digits.length; index++) {
        const element = digits[index];
        if(element % 5 === 0){
            emptyArray.push(element)
        }
    }
    if(emptyArray.length === 0){
        return console.log("There is no order in the array that meets this condition!")
    }
    return emptyArray;
}
console.log(customFilterMethod(digits, emptyArray))