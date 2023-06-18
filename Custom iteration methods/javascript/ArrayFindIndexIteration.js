const cities = ["Moscow", "London", "Glasgow", "Istanbul", "Baku", "Lisbon", "Manila", "La-Pas"]
function customFindIndexMethod(cities){
    for (let index = 0; index < cities.length; index++) {
        if(cities[index].length === 4){
            return index;
        }
    }
    return -1;
}

console.log(customFindIndexMethod(cities))