function Till() {
  this.total = 0
}

Till.prototype.add = function(item, price, quantity) {
  this.total += (price * quantity);
}
