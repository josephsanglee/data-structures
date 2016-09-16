var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  return newTree;
};


BinarySearchTree.prototype.insert = function(value) {
  //goes left
  if (this.value > value) {
    this.left ? this.left.insert(value) : this.left = BinarySearchTree(value);
  }
  //goes right
  if (this.value < value) {
    this.right ? this.right.insert(value) : this.right = BinarySearchTree(value);
  }
}; //time complexity === O(log(n));

BinarySearchTree.prototype.contains = function(target) {
  var result = false; //base case

  if (this.value === target) {
    result = true; //if current root/branch is target return true
  }

  if (this.value > target && this.left) {
    result = this.left.contains(target);
  } //if value less go left and if left exists then recursive call contains

  if (this.value < target && this.right) {
    result = this.right.contains(target);
  }//if value more go right and if right exists then recursive call contains

  return result; //return result of (recursive) search
}; //time complexity === O(log(n));

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value); //callback on root

  if (this.left) {
    this.left.depthFirstLog(callback);
  } //callback on left if left exists

  if (this.right) {
    this.right.depthFirstLog(callback);
  } //callback on right if right exists
  
}; //time complexity === O(n);


/*
 * Complexity: What is the time complexity of the above functions?
 */
