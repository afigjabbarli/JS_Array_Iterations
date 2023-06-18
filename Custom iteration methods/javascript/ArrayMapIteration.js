const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
const simpleNumbers = []
function customMapMethod(evenNumbers, simpleNumbers){
    for (let index = 0; index < evenNumbers.length; index++) {
        const element = evenNumbers[index];
        simpleNumber = element / 2;
        simpleNumbers[index] = simpleNumber 
    }
    return simpleNumbers
}
console.log(customMapMethod(evenNumbers, simpleNumbers))

