"use strict";

function searchWord(sentence, word) {
  try {
    if (typeof sentence !== "string" || typeof word !== "string") {
      throw new Error("Both parameters must be strings.");
    }

    let sum = 0;
    const words = sentence.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(word.toLowerCase())) {
        sum++;
      }
    }

    return `'${word}' was found ${sum} times.`;
  } catch (err) {
    console.log(err);
  }
}

console.log(searchWord("The quick brown fox xFox", "fox")); // "'fox' was found 1 times."
console.log(searchWord("aaa, bb, cc, dd, aa", "aa")); // "'aa' was found 2 times."
console.log(searchWord("sunshine", "sun")); // "'sun' was found 1 times."
