function checkName(name) {
  if (typeof name === "string") {
    let lowerCaseName = name.toLowerCase();
    let lastWord = lowerCaseName.slice(-1);
    let wordArray = ["a", "y", "i", "e", "o", "u", "w"];

    if (wordArray.includes(lastWord)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}

console.log(18, checkName("Salman"));
console.log(19, checkName("RAFEE"));
console.log(20, checkName("Jhankar"));
console.log(21, checkName(199));
console.log(22, checkName(["Rashed"]));
console.log(23, checkName("SalmA"));
