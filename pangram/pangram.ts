let alphabet: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export function isPangram(sentence: string): boolean {
  const cleanedSentence = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  sentence: for ( let i = 0; i < cleanedSentence.length - 1; i ++ ) {
    for (let j = 0; j < alphabet.length - 1; j++ ){

      if (cleanedSentence[i] === alphabet[j]) {
        alphabet.splice(j,1);

        if (alphabet.length === 0) {
          return true;
        }

        continue sentence;
      }
    }
    return false;
  }
  return false;
}
