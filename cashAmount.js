class CashAmount {
  constructor(amount) {
    this.amount = amount;
  }

  totalInPennies() {
    var str = this.amount.toString();
    var newStr = str.replace('.', '');

    return parseFloat(newStr);
  }

  addDoubleAmount(amount) {
    var newAmount = parseFloat(amount);
    var current = parseFloat(this.amount);
    var total = newAmount + current;
    this.amount = total;
    return total;
  }

  quantityOfEachDenomination() {
    let money = this.amount;
    let wallet = {
      hundreds: 0,
      fifties: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };

    console.log('initial money: ', money);

    let moneyArr = [100, 50, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

    while (money >= 0) {
      if (money >= 100) {
        money -= 100;
        wallet['hundreds'] += 1;
      } else if (money >= 50) {
        money -= 50;
        wallet['fifties'] += 1;
      } else if (money >= 20) {
        money -= 20;
        wallet['twenties'] += 1;
      } else if (money >= 10) {
        money -= 10;
        wallet['tens'] += 1;
      } else if (money >= 5) {
        money -= 5;
        wallet['fives'] += 1;
      } else if (money >= 1) {
        money -= 1;
        wallet['ones'] += 1;
      } else if (money >= 0.25) {
        money -= 0.25;
        wallet['quarters'] += 1;
      } else if (money >= 0.1) {
        money -= 0.1;
        wallet['dimes'] += 1;
      } else if (money >= 0.05) {
        money -= 0.05;
        wallet['nickels'] += 1;
      } else if (money >= 0.01) {
        money -= 0.01;
        wallet['pennies'] += 1;
      }
      //   console.log('Money: ', money);
    }
    this.amount = wallet;
  }

  toDouble() {
    return parseFloat(this.amount);
  }

  toDoubleString() {
    return this.amount.toString();
  }
}

const cash = new CashAmount(300);
console.log(cash.quantityOfEachDenomination());
