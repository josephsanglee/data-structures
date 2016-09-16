var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (value !== undefined && value !== null) {
      var node = Node(value);
    
      if (list.head === null) {
        list.head = node;
        list.tail = node;
      } else if (list.head.next === null) {
        list.head.next = node;
        list.tail = node;
      } else {
        var currentTail = list.tail;
        list.tail = node;
        currentTail.next = list.tail;
      }
    }
  };

  list.removeHead = function() {
    var nextHead = list.head.next;
    var removeHeadValue = list.head.value;

    list.head = nextHead;

    return removeHeadValue;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
