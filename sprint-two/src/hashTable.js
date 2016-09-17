

var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
  this._ratio = this._counter / this._limit;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
    this._counter++;
  } else {
    var inserted = false;

    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k ) {
        this._storage.get(index)[i][1] = v;
        this._counter++;
        inserted = true;
      }
    }

    if (!inserted) {
      this._storage.get(index).push([k, v]);
      this._counter++;
    }
  }

  if (this._ratio >= 0.75) { 
    this._resize(this._limit / 2);
  } else if (this._ratio < 0.25) {
    this._resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      //delete this._storage.get(index)[i][0];
      this._storage.get(index)[i].splice(1, 1);
      this._counter--;
    }
  }

  if (this._ratio >= 0.75) {  
    this._resize(this._limit / 2);
  } else if (this._ratio < 0.25) {
    this._resize(this._limit * 2);
  }
};

HashTable.prototype._resize = function(newLimit) {
  var tuples = [];

  for (var i = 0; i < this._limit; i++) {
    var bucket = this._storage.get(i);
    debugger;

    if (bucket) {
      tuples.push(bucket);
    }
  }

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);

  var newStorage = this._storage;
  var limit = this._limit;
  var insert = this.insert.bind(newStorage);
  
  tuples.forEach(function(tuple, i) {
    var key = tuple[i][0];
    var value = tuple[i][1];

    insert(key, value);
  });

  var peek = this._storage.peek();
  debugger;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

