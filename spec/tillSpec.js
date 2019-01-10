describe("Till", function() {
  var till;

  beforeEach(function() {
    till = new Till();
  })

  it("should initialize with a total of 0", function() {
    expect(till.total).toEqual(0);
  })

  it("should add cost of items to total", function() {
    till.add("Cafe Latte", 4.75, 1)
    expect(till.total).toEqual(4.75)
  })

  it("should calculate cost of multiple items", function() {
    till.add("Cafe Latte", 4.75, 2)
    till.add("Hot Chocoloate", 4.5, 1)
    expect(till.total).toEqual(14)
  })

  it("can add items to order", function() {
    till.add("Cafe Latte", 4.75, 2)
    expect(till.order).toContain(["Cafe Latte", 4.75, 2])
  })

  it("can return the total of the order", function() {
    till.add("Cafe Latte", 4.75, 2)
    till.add("Hot Chocoloate", 4.5, 1)
    expect(till.displayTotal()).toEqual('14.00')
  })

  it("can calculate the amount of tax for an order", function() {
    till.add("Cafe Latte", 4.75, 2)
    till.add("Hot Chocoloate", 4.5, 1)
    expect(till.calculateTax()).toEqual('1.21')
  })

  it("can calculate the amount of change for an order", function() {
    till.add("Cafe Latte", 4.75, 2)
    till.add("Hot Chocoloate", 4.5, 1)
    expect(till.calculateChange(20)).toEqual(6)
  })

  it("can calculate the discount for a given order", function() {
    till.add("Cafe Latte", 4.75, 2)
    till.add("Hot Chocoloate", 4.5, 1)
    till.add("Choc Mudcake", 6.4, 10)
    expect(till.applyDiscount()).toEqual('74.10')
  })

  it("only applies discount to orders over 50", function() {
    till.add("Cafe Latte", 4.75, 2)
    till.add("Hot Chocoloate", 4.5, 1)
    till.add("Choc Mudcake", 6.4, 4)
    expect(till.displayTotal()).toEqual('39.60')
  })
})
