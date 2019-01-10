function Till() {
  this.total = 0;
  this.order = [];
  this.TAX = 8.64;
  this.DISCOUNT = 5
}

Till.prototype.add = function(item, price, quantity) {
  this.total += (price * quantity);
  this.order.push([item, price, quantity])
}

Till.prototype.displayTotal = function() {
  if (this.total >= 50) {
    this.applyDiscount()
  } else {
    return this.total.toFixed(2);
  }
}

Till.prototype.calculateTax = function() {
  return parseFloat(this.total * (this.TAX / 100)).toFixed(2);
}

Till.prototype.calculateChange = function(moneyGiven) {
  return moneyGiven - this.total;
}

Till.prototype.applyDiscount = function() {
  this.total = (this.total - this.total * (this.DISCOUNT / 100)).toFixed(2)
  return this.total
}
