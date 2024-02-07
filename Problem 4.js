function password(obj) {
  if (
    obj.hasOwnProperty("name") &&
    obj.hasOwnProperty("birthYear") &&
    obj.hasOwnProperty("siteName") &&
    obj.birthYear.toString().length === 4
  ) {
    let name = obj.name;
    let birthYear = obj.birthYear;
    let siteName = obj.siteName;
    let siteNameFirstLetterUpper =
      siteName.charAt(0).toUpperCase() + siteName.slice(1);
    return (generatedPassword = siteNameFirstLetterUpper.concat(
      "#",
      name,
      "@",
      birthYear
    ));
  } else {
    return "invalid";
  }
}

console.log(
  24,
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(
  28,
  password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })
);

console.log(
  30,
  password({ name: "toky", birthYear: 200, siteName: "Facebook" })
);

console.log(32, password({ name: "maisha", birthYear: 2002 }));
