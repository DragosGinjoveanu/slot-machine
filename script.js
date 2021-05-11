var bank = 0, money;

function addMoneyToBank() {
  money = parseInt(document.getElementById("budget").value);
  if (Number.isNaN(money) || money == 0) {
    changeStatus("red", "Minimum deposit is $1.");
  } else {
    bank += money;
    document.getElementById("bank").innerHTML = "Bank: $" + bank;
    changeStatus("green", "You added $" + money +" to your bank.");
  }
  return false;
} 

function changeStatus(color, text) {
  document.getElementById("status").style.color = color;
  document.getElementById("status").innerHTML = text;
}

function getRandomSymbol() {
  var slots = "7/*";
  return slots[Math.floor(Math.random() * slots.length)];
}

//spins the machine
function playGame() {
  if (bank == 0) {
      changeStatus("red", "You ran out of money!");
  } else {
      var bet = parseInt(document.getElementById("bet").value);
      if (bet > bank) {
        changeStatus("red", "You don't have enough money!");
      } else if (bet <= 0 || Number.isNaN(bet)) {
        changeStatus("red", "Minimum bet is $1.");
      } else {
        bank -= bet;
        document.getElementById("bank").innerHTML = "Bank: $" + bank;
        var randomCharacter = [];
        for (var i = 1; i <= 3; i++) {
          randomCharacter[i] = getRandomSymbol();
        }
        document.getElementById("slotMachine").innerHTML = "";
        document.getElementById("slotMachine").innerHTML = randomCharacter[1] + " " + randomCharacter[2] + " " + randomCharacter[3];
        if (checkGameStatus(randomCharacter, bet)) {
          changeStatus("green", "You won $" + money + "!");
          document.getElementById("bank").innerHTML = "Bank: $" + bank;
        } else {
          changeStatus("red", "You lost!");
        }
      }
  }
  return false;
}

//checks if you won/lost
function checkGameStatus(slots, bet) {
  if (slots[1] == slots[2] && slots[2] == slots[3]) {
      money;
      if (slots[1] == '7') {
        money = bet * 5;
      } else if (slots[1] == '*') {
        money = bet * 3;
      } else if (slots[1] = '/') {
        money = bet * 2;
      }
      bank += money;
      return true;
  }
  return false;
}

function restart() {
  location.reload();
}
