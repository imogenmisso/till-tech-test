function Till() {
  this.total = 0;
  this.order = [];
  this.TAX = 8.64
}

Till.prototype.add = function(item, price, quantity) {
  this.total += (price * quantity);
  this.order.push([item, price, quantity])
}

Till.prototype.displayTotal = function() {
  return this.total;
}

Till.prototype.calculateTax = function() {
  return parseFloat(this.total * (this.TAX / 100)).toFixed(2);
}
