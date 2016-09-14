var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    if (counter > 0) {
      counter--; 
    }
    
    delete storage[0];
    
    var line = Object.keys(storage);
    
    for (var i = 0; i < line.length; i++) {
      storage[i] = storage[i + 1];
    }
    
    delete storage[line.length];
    
    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
