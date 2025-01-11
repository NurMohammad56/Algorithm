function sequence(alphabet) {
  alphabet = alphabet.toLowerCase();

  for (let i = 0; i < alphabet.length - 1; i++) {
    if (alphabet.charCodeAt(i) + 1 !== alphabet.charCodeAt(i + 1)) {
      return false;
    }
  }
  return true;
}

console.log(sequence("abcdc"));
console.log(sequence("abcd"));
