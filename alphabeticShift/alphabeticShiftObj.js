function alphabeticShift(inputString) {
    const alphabet ={
        'a': 'b',
        'b': 'c',
        'c': 'd',
        'd': 'e',
        'e': 'f',
        'f': 'g',
        'g': 'h',
        'h': 'i',
        'i': 'j',
        'j': 'k',
        'k': 'l',
        'l': 'm',
        'm': 'n',
        'n': 'o',
        'o': 'p',
        'p': 'q',
        'q': 'r',
        'r': 's',
        's': 't',
        't': 'u',
        'u': 'v',
        'v': 'w',
        'w': 'x',
        'x': 'y',
        'y': 'z',
        'z': 'a'
    };
  let inputShift = inputString.split('');

  for (let i = 0; i < inputString.length; i++) {
      console.log(inputShift[i]);
      inputShift[i] = alphabet[inputShift[i]]
  }
  return inputShift.join('');
}

console.log(alphabeticShift('crazy'));
