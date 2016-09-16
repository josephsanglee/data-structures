//this is now a Doubly-Linked list ^_^V 

var /*Doubly*/LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if (value !== undefined && value !== null) {
      var node = Node(value);
      if (list.head === null) { //this is for the case if no head exists
        list.head = node;
        list.tail = node;
      } else {
        list.head.previous = node; //this is for the case if a head exists already
        node.next = list.head;
        list.head = node;
      }
    }
  }; //time complexity === O(1);

  list.removeHead = function() {
    var nextHead = list.head.next;
    var removeHeadValue = list.head.value;

    list.head.previous = null;
    list.head = nextHead;

    return removeHeadValue;
  }; //time complexity === O(1);

  list.addToTail = function(value) {
    if (value !== undefined && value !== null) {
      var node = Node(value);
      if (this.tail === null) {
        list.head = node;
        list.tail = node;
      } else {
        list.tail.next = node;
        node.previous = list.tail;
        list.tail = node;
      }
    }
  }; //time complexity === O(1);

  list.removeTail = function() {
    var nextTail = list.tail.previous;
    var removeTailValue = list.tail.value;

    nextTail.next = null;
    list.tail = nextTail;

    return removeTailValue;
  }; //time complexity === O(1);


  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    } 
    return false;
  };

  return list;
}; //time complexity === O(n);

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
