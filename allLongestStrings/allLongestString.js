function allLongestString(inputArray) {
    let longestString = 0
    const longestWords = []
    
    inputArray.forEach(word => {
        longestString = longestString < word.length ? word.length : longestString
        if (word.length === longestString) {
            longestWords.push(word)
        }
    });
    return longestWords
}
console.log(allLongestString(['aba', 'aa', 'ad', 'vcd', 'aba']));