var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
}; //time complexity === O(1);

treeMethods.contains = function(target, result) {
  result = result || false; 

  if (this.value === target) {
    return true;
  } else if (this.children && !result) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      result = child.contains(target, result);
    }
  }

  return result;
}; //time complexity === O(n);

treeMethods.removeChild = function(target) {
  // if (target) {
  //   if (this.value === target) {
      
  //   }
  // } else {

  // }
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      if (child.value === target) {
        this.children.splice(i, 1);
      }

      if (child.contains(target)) {
        child.removeChild(target);
      }
    }
  }
}; //time complexity === O(n);



/*
 * Complexity: What is the time complexity of the above functions?
 */
