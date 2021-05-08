var bank = 0;
// this function adds money to the bank
function addMoneyToBank() {
  var money = parseInt(document.getElementById("budget").value);
  bank += money;
  document.getElementById("bank").innerHTML = "Bank: $" + bank;
  document.getElementById("status").style.color = "green";
  document.getElementById("status").innerHTML = "You added $" + money +" to your bank.";
  return false;
} 
// this function generates a random character
function randomSymbol() {
  var slots = "7/*";
  return slots[Math.floor(Math.random() * slots.length)];
}
// this function spins the machine
function playGame() {
  if (bank == 0) {
      document.getElementById("status").style.color = "red";
      document.getElementById("status").innerHTML = "You ran out of money!";
  } else {
      var bet = parseInt(document.getElementById("bet").value);
      if (bet > bank) {
        document.getElementById("status").style.color = "red";
        document.getElementById("status").innerHTML = "You don't have enough money!";
      } else if (bet <= 0 || Number.isNaN(bet)) {
        document.getElementById("status").style.color = "red";
        document.getElementById("status").innerHTML = "Minimum bet is $1.";
      } else {
        bank -= bet;
        document.getElementById("bank").innerHTML = "Bank: $" + bank;
        var randomCharacter1 = randomSymbol();
        var randomCharacter2 = randomSymbol();
        var randomCharacter3 = randomSymbol();
        document.getElementById("slotMachine").innerHTML = "";
        document.getElementById("slotMachine").innerHTML = randomCharacter1 + " " + randomCharacter2 + " " + randomCharacter3;
        gameStatus(randomCharacter1, randomCharacter2, randomCharacter3, bet);
      }
  }
  return false;
}
// this function tells you if you won/lost and updates the bank
function gameStatus(symbol1, symbol2, symbol3, bet) {
  if (symbol1 == symbol2 && symbol2 == symbol3) {
      var money;
      document.getElementById("status").style.color = "green";
      if (symbol1 == '7') {
        money = bet * 5;
      } else if (symbol1 == '*') {
        money = bet * 3;
      } else if (symbol = '/') {
        money = bet * 2;
      }
      bank += money;
      document.getElementById("status").innerHTML = "You won $" + money + "!";
      document.getElementById("bank").innerHTML = "Bank: $" + bank;
  } else {
      document.getElementById("status").style.color = "red";
      document.getElementById("status").innerHTML = "You lost!";
  }
}
// this function restarts the whole game
function restart() {
  location.reload();
}