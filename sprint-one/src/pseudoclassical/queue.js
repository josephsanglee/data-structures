var Queue = function(counter, storage) {
  this.counter = counter || 0;
  this.storage = storage || {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.counter;
};



