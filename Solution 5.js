/* Function monthlySavings() that take an array and number as inputs */
function monthlySavings(arr, livingCost) {
  // Condition to check input data types - array & number
  if (Array.isArray(arr) && typeof livingCost === "number") {
    let totalIncome = 0;
    for (const payment of arr) {
      // 20% tax applied to payment >=3000
      if (payment >= 3000) {
        let paymentAfterTax = payment * 0.8;
        // Calculate total income
        totalIncome += paymentAfterTax;
      } else {
        // Calculate total income
        totalIncome += payment;
      }
    }
    // Calculate savings
    let savings = totalIncome - livingCost;
    // Condition to check if savings >= 0
    if (savings >= 0) {
      return savings;
    } else {
      return "earn more";
    }
    // Other data type returns error
  } else {
    return "invalid input";
  }
}

// Function Calls
console.log(32, monthlySavings([1000, 2000, 3000], 5400));
console.log(33, monthlySavings([1000, 2000, 2500], 5000));
console.log(34, monthlySavings([900, 2700, 3400], 10000));
console.log(35, monthlySavings(100, [900, 2700, 3400]));
console.log(36, monthlySavings("hello", 10000));
console.log(37, monthlySavings([900, 2700, 3400], "10000"));
