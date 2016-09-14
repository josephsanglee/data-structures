var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  return someInstance;
};

var stackMethods = {

  push: function (value) {
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function() {
    var result = this.storage[this.counter];

    if (this.counter > 0) {
      delete this.storage[this.counter];
      this.counter--;
    }

    return result;
  },
  size: function() {
    return this.counter;
  }

};


