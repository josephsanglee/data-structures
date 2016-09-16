describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should not execute if value provided is undefined and null', function() {
    linkedList.addToTail(2);
    expect(linkedList.tail.value).to.equal(2);
    linkedList.addToTail(undefined);
    expect(linkedList.tail.value).to.equal(2);
    linkedList.addToTail(null);
    expect(linkedList.tail.value).to.equal(2);
  });

  it('should correctly add a new head', function() {
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    linkedList.addToHead(7);
    expect(linkedList.head.value).to.equal(7);
    expect(linkedList.head.value).to.not.equal(5);
  });

  it('should correctly adjust references when adding to head or tail', function() {
    linkedList.addToHead(5);
    linkedList.addToHead(6);
    linkedList.addToTail(4);
    expect(linkedList.tail.previous.value).to.equal(5);
  });

  it('should correctly adjust references when removing tail', function() {
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    linkedList.addToHead(8);
    expect(linkedList.tail.value).to.equal(7);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(5);
    expect(linkedList.tail.value).to.not.equal(7);
  });
});
