/* function calculateMoney() takes an positive Integer as input */
function calculateMoney(ticketSale) {
  // condition to check if input is an positive integer
  if (Number.isInteger(ticketSale) && ticketSale >= 0) {
    let ticketPrice = 120;
    // Total ticket sale calculation
    let totalTicketSale = ticketSale * ticketPrice;

    let guardLunch = 500;
    let guardNumber = 1;

    // Guard lunch cost calculation
    let guardLunchCost = guardLunch * guardNumber;

    let staffLunch = 50;
    let staffNumber = 8;

    // All staff lunch cost calculation
    let staffLunchCost = staffLunch * staffNumber;

    // Final calculation to calculate daily profit

    let dailyProfit = totalTicketSale - guardLunchCost - staffLunchCost;
    return dailyProfit;

    // Negative integer or other data types returns error
  } else {
    return "Invalid Number";
  }
}

// Function Calls
console.log(33, calculateMoney(10));
console.log(34, calculateMoney(1055));
console.log(35, calculateMoney(93));
console.log(36, calculateMoney(-130));
console.log(37, calculateMoney(0));
console.log(38, calculateMoney("hello"));
console.log(39, calculateMoney([2, 3, 4]));
