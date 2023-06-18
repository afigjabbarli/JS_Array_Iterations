const values = [15, 5, 10, 50, 19, 150, 25, 15, 175, 225, 500, 100, 30, 200, 300, 275, 160, 16]
function customSomeMethod(values){
    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        if(element > 300){
           return true;
        }
    }
    return false;
}
console.log(customSomeMethod(values))