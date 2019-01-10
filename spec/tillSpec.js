describe("Till", function() {
  var till;

  beforeEach(function() {
    till = new Till();
  })

  it("should initialize with a total of 0", function() {
    expect(till.total).toEqual(0);
  })
})
