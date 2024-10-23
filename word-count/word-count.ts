export function count(words: string) {
  let wordMap = new Map<string, number>(Object.entries({}))
  let wordsSplitado: string[];

  words.split(/[^a-zA-Z0-9']+/g).forEach(element => {
    const wordCount = wordMap.has(element) ? wordMap.get(element)! + 1 : 1;

    wordMap.set(element, wordCount);
  });


  // return wordsSplitado;
  return wordMap;
}
