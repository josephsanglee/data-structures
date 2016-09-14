var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    var result = this.storage[0];
    if (this.counter > 0) {
      this.counter--; 
    }
    
    delete this.storage[0];
    
    var line = Object.keys(this.storage);
    
    for (var i = 0; i < line.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    
    delete this.storage[line.length];
    
    return result;
  },
  size: function() {
    return this.counter;
  }
};


