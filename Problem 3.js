function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let numbersOnly = array.filter((arr) => {
      return typeof arr === "number" && !isNaN(arr);
    });
    return numbersOnly;
  } else {
    return "Invalid Array";
  }
}

console.log(
  13,
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

console.log(27, deleteInvalids(["1", { num: 2 }, NaN]));
console.log(28, deleteInvalids([1, 2, -3]));
console.log(29, deleteInvalids({ num: [1, 2, 3] }));
