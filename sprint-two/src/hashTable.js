

var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
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
        inserted = true;
      }
    }

    if (!inserted) {
      this._storage.get(index).push([k, v]);
      this._counter++;
    }
  }

  if (this._counter / this._limit >= 0.75) { 
    this._resize(Math.floor(this._limit * 2));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      //delete this._storage.get(index)[i][0];
      this._storage.get(index).splice(i, 1);
      this._counter--;
      var counter = this._counter;
    }
  }

  if (this._counter / this._limit < 0.25) {
    this._resize(Math.floor(this._limit / 2));
  }
};

HashTable.prototype._resize = function(newLimit) {
  var tuples = [];
  var storage = this._storage;

  //grab the existing tuples and put them into an array to push into the resized hash table
  for (var i = 0; i < this._limit; i++) {
    if (storage.get(i)) {
      for (var j = 0; j < storage.get(i).length; j++) {
        var tuple = storage.get(i)[j];

        tuples.push(tuple);
      }
    }
  }
  //create the new hash table, reset the counter
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;

  //grab the tuple key value pairings
  for (var i = 0; i < tuples.length; i++) {
    var k = tuples[i][0];
    var v = tuples[i][1];

    //insert the tuple(s) into the new hash table
    var index = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(index) === undefined) {
      this._storage.set(index, [[k, v]]);
      this._counter++;
    } else {
      var inserted = false;

      for (var i = 0; i < this._storage.get(index).length; i++) {
        if (this._storage.get(index)[i][0] === k ) {
          this._storage.get(index)[i][1] = v;
          inserted = true;
        }
      }

      if (!inserted) {
        this._storage.get(index).push([k, v]);
        this._counter++;
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 * Hash Table operations have a time complexity of O(n) at worst and O(1) at best;
 */

