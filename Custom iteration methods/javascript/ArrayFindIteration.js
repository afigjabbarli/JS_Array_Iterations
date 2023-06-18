const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function customFindMethod(counts){
    for (let index = 0; index < counts.length; index++) {
        const element = counts[index];
        if(element % 5 === 0){
            return element;
        }
    }
    return undefined;
}

console.log(customFindMethod(counts))
