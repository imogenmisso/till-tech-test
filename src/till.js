function Till() {
  this.total = 0
  this.order = []
}

Till.prototype.add = function(item, price, quantity) {
  this.total += (price * quantity);
  this.order.push([item, price, quantity])
}

Till.prototype.displayTotal = function() {
  return this.total;
}
