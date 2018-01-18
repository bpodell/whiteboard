'use strict'

const count = module.exports = {};

count.conductor = function(train) {
    if (typeof(train) !== "object" || Array.isArray(train)) {
        return null;
    }
    let car = train;
    let agg = 0;
    let numeric = true;
    while (car.next !== null) {
        if (isNaN(car.value)) {
            console.log(car.next)
            numeric = false
        }
        agg += car.value;
        car = car.next;
    }
    if (isNaN(car.value)) {
        numeric = false
    }
    agg += car.value;
    if (numeric === true) {
        return agg
    } 
    if (numeric === false) {
        return null;
    }
    
    
}

// let train = {
//      value: 3, next: {
//         value: 4, next: {
//             value: 5, next: null
//         }
//     }}

// count(train)