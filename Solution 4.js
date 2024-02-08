/* Function password() that takes an object as input */
function password(obj) {
  // Condition to check missing object property & birthYear length equals to 4
  if (
    obj.hasOwnProperty("name") &&
    obj.hasOwnProperty("birthYear") &&
    obj.hasOwnProperty("siteName") &&
    obj.birthYear.toString().length === 4
  ) {
    let name = obj.name;
    let birthYear = obj.birthYear;
    let siteName = obj.siteName;
    // Converts site name's first letter to upper case
    let siteNameFirstLetterUpper =
      siteName.charAt(0).toUpperCase() + siteName.slice(1);
    // String concat method to concatenate the strings
    let generatedPassword = siteNameFirstLetterUpper.concat(
      "#",
      name,
      "@",
      birthYear
    );
    return generatedPassword;
    // If object missing property & birthYear not equal to 4; returns error
  } else {
    return "invalid";
  }
}

// Function Calls
console.log(
  32,
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(
  36,
  password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })
);

console.log(
  41,
  password({ name: "toky", birthYear: 200, siteName: "Facebook" })
);

console.log(45, password({ name: "maisha", birthYear: 2002 }));
