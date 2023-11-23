interface ObjectOfWords {
  [key: string]: number;
}
function countPhrase(phrase: string) {
  const numberOfWords = phrase.trim().split(' ').length;
  const filteredWord = phrase.replace(/\W/g, '');
  const objectOfWords: ObjectOfWords = {};
  filteredWord.split('').forEach((char) => {
    if (char in objectOfWords) objectOfWords[char] = objectOfWords[char] + 1;
    else objectOfWords[char] = 1;
  });
  let response = `${numberOfWords} palavras;`;
  Object.keys(objectOfWords).forEach((key) => {
    response += ` ${key}: ${objectOfWords[key]};`;
  });

  console.log(response);
  return response;
}

const book = 'este e o conteudo apenas com palavras minusculas e espacos';
countPhrase(book);
