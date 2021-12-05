function map(sourceArray, callbackFunction) {
    let result = [];
    for (const element of sourceArray) {
        result.push(callbackFunction(element));
    }
    return result
}

function reduce(sourceArray, callbackFunction, startValue) {
    if (startValue) {
        let aggregator = startValue;
        for (const element of sourceArray) {
            aggregator = callbackFunction(element, aggregator)
        }
        return aggregator
    } else {
        let aggregator = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
            aggregator = callbackFunction(sourceArray[i], aggregator)  
        }
        return aggregator
    }   
}

// function reduceToTotal(sourceArray, startingPoint = 0) {
//     let sum = startingPoint;
//     for (const element of sourceArray) {
//         sum += element
//     }
//     return sum
// }

// function reduceToAllTrue(sourceArray) {
//     let result = false;
//     for (const element of sourceArray) {
//         if (!!element === true) {
//             result = true
//         }
//         else {
//             result = false
//         }
//     }
//     return result
// }

// function reduceToAnyTrue(sourceArray) {
//     let result = false;
//     for (const element of sourceArray) {
//         if (!!element === true) {
//             result = true
//         }
//     }
//     return result
// }