var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value; //assign the nth, starting at 0, index the value
    counter++; //move over to the next index for assignment
  };

  someInstance.dequeue = function() {
    var result = storage[0]; //store element that is first in line
    if (counter > 0) {
      counter--; 
    }
    
    delete storage[0]; // pops off first in line
    
    var line = Object.keys(storage);
    
    for (var i = 0; i < line.length; i++) {
      storage[i] = storage[i + 1]; //shift every element 1 over to the left aka down 1 index
    }
    
    delete storage[line.length]; //delete the last element as it is no longer needed, aka array.length--
    
    return result; //return the popped result
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
