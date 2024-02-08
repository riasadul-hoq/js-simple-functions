/* Function deleteInvalids() that takes an array as input */
function deleteInvalids(array) {
  // Condition to check input data type - array
  if (Array.isArray(array)) {
    // Array filter method to keep only number (excluding Nan) data type;
    let numbersOnly = array.filter((arr) => {
      return typeof arr === "number" && !isNaN(arr);
    });
    return numbersOnly;
    // Other data type returns error
  } else {
    return "Invalid Array";
  }
}

// Function Calls
console.log(
  18,
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);

console.log(32, deleteInvalids(["1", { num: 2 }, NaN]));
console.log(33, deleteInvalids([1, 2, -3]));
console.log(34, deleteInvalids({ num: [1, 2, 3] }));
