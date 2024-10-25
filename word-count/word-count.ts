export function count(words: string): Map<string, number> {
  const wordMap = new Map<string, number>(Object.entries({}))
  const wordsWithoutApostrophe = words.replace(/(?<![a-zA-Z])'|'(?![a-zA-Z])/g, '');

  wordsWithoutApostrophe.split(/[^a-zA-Z0-9']+/g).forEach(element => {
    const elementNormalized: string = element.toLowerCase();
    const wordCount = wordMap.has(elementNormalized) ? wordMap.get(elementNormalized)! + 1 : 1;
    
    if (element !== "") {
      wordMap.set(elementNormalized, wordCount);
    }
  });

  return wordMap;
}
