function adjacentElementsProduct(inputArr) {
    const len = inputArr.length - 1
    let largestProduct = inputArr[0] * inputArr[1]

    for (let i = 1; i <= len; i++){
        const product = inputArr[i] * inputArr[i - 1]
        // console.log(product);
        largestProduct = largestProduct < product ? product : largestProduct
    }

    return largestProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));