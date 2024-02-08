/* Function checkName() that takes an string as input */
function checkName(name) {
  // Condition to check input data type - string
  if (typeof name === "string") {
    // Converts name to lower case
    let lowerCaseName = name.toLowerCase();
    // Identify last letter of the name
    let lastLetter = lowerCaseName.slice(-1);

    let wordArray = ["a", "y", "i", "e", "o", "u", "w"];

    // Condition to check if array contains last letter
    if (wordArray.includes(lastLetter)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
    // Other data type returns error
  } else {
    return "invalid";
  }
}

// Function Calls
console.log(25, checkName("Salman"));
console.log(26, checkName("RAFEE"));
console.log(27, checkName("Jhankar"));
console.log(28, checkName(199));
console.log(29, checkName(["Rashed"]));
console.log(30, checkName("SalmA"));
