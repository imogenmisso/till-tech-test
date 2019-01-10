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
})
