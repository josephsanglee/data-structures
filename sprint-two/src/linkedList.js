var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var previousHead = list.head;

      list.head = Node(value);
      list.head.next = previousHead;
      previousHead.previous = list.head;
    }
  };

  list.removeHead = function() {
    var nextHead = list.head.next;
    var removeHeadValue = list.head.value;

    list.head.previous = null;
    list.head = nextHead;

    return removeHeadValue;
  };

  list.addToTail = function(value) {
    if (value !== undefined && value !== null) {
      var node = Node(value);
    
      if (list.head === null) {
        list.head = node;
        list.tail = node;
      } else if (list.head.next === null) {
        list.head.next = node;
        list.tail = node;
      } else if (list.tail === null) {
        list.tail = list.head;
      } else {
        list.tail.next = node;
        node.previous = list.tail;
        list.tail = node;
      }
    }
  };

  list.removeTail = function() {
    var nextTail = list.tail.previous;
    var removeTailValue = list.tail.value;

    nextTail.next = null;
    list.tail = nextTail;

    //return removeTailValue;
  };


  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    } 
    return false;
  };

  return list;
};

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
