var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.peek = function(item) {
  if (this._storage[item]) {
    return this._storage[item];
  }

  if (!this._storage[item]) {
    return item + " is not in set!";
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   adds/delete = O(1)
   gets = O(n)
 */