function addTwoDigits(n) {
    let num = n.toString().split('')
    // return num.reduce((a, b) => {
    //     return parseInt(a)+parseInt(b)
    // })
    return parseInt(num[0]) + parseInt(num[1])
    
}
console.log(addTwoDigits(29));
console.log(addTwoDigits(81));
console.log(addTwoDigits(11));

