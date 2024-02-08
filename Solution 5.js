function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === "number") {
    let totalIncome = 0;
    for (const payment of arr) {
      if (payment >= 3000) {
        let paymentAfterTax = payment * 0.8;
        totalIncome = totalIncome + paymentAfterTax;
      } else {
        totalIncome = totalIncome + payment;
      }
    }
    let savings = totalIncome - livingCost;
    if (savings >= 0) {
      return savings;
    } else {
      return "earn more";
    }
  } else {
    return "invalid input";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
console.log(monthlySavings("hello", 10000));
console.log(monthlySavings([900, 2700, 3400], "10000"));
