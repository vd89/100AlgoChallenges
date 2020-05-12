
function alphabeticShift(inputString) {
    const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
    ]
    let inputShift = inputString.split('')

    for (let i = 0; i < inputString.length; i++){
        let index = 0
        if (inputShift[i] !== 'z') {
            index = alphabet.indexOf(inputShift[i])+1
        }
        inputShift[i] = alphabet[index]
    }
    return inputShift.join('')
}

console.log(alphabeticShift('crazy'));
