const findTheOldest = function(people) {
    let reduced;
    let aux1;
    let aux2;
    reduced = people.reduce((prev, curr)=>{
        if (prev.yearOfDeath == undefined){
            return prev.yearOfBirth > curr.yearOfBirth ? curr : prev;
        }
        aux1 = prev.yearOfBirth - prev.yearOfDeath;
        aux2 = curr.yearOfBirth - curr.yearOfDeath
        prev = aux1 < aux2 ? prev : curr
        return prev;
    })
    return reduced;
};

// Do not edit below this line
module.exports = findTheOldest;
