function calculateMoney(ticketSale) {
  if (Number.isInteger(ticketSale) && ticketSale >= 0) {
    let ticketPrice = 120;
    let totalTicketSale = ticketSale * ticketPrice;

    let guardLunch = 500;
    let guardNumber = 1;
    let guardLunchCost = guardLunch * guardNumber;

    let staffLunch = 50;
    let staffNumber = 8;
    let staffLunchCost = staffLunch * staffNumber;

    return totalTicketSale - guardLunchCost - staffLunchCost;
  } else {
    return "Invalid Number";
  }
}

console.log(20, calculateMoney(10));
console.log(21, calculateMoney(1055));
console.log(22, calculateMoney(93));
console.log(23, calculateMoney(-130));
console.log(24, calculateMoney(0));
console.log(25, calculateMoney("hello"));
console.log(26, calculateMoney([2, 3, 4]));
