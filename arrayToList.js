'use strict'

const arrayToList = function (iterative) {
    let list = null;
    
    for (let i = iterative.length -1; i >= 0; i--) {
        list = {value: iterative[i], rest: list};
    }
        
    return list;
}

const listToArray = function (aList) {
    let anArray = [];
    for (let i = aList; i; i = i.rest) {
        anArray.push(i.value);
    }
    return anArray;
}

const prepend = function (element, aList) {
    let list = aList;
    list = {value: element, rest: list};
    return list;
}

const nth = function (aList, n) {
    let pos = 0
    for (let i = aList; i; i = i.rest) {
        if (pos === n) {
            return i.value
        }
        else {pos += 1}
    }
    return undefined
}

console.log(arrayToList([10, 20]));
// > {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// > [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// > {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// > 20