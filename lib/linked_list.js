function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

function LinkedList() {
  var tail, head;

  this.insert = function (value) {
    if (this.size() === 0) {
      head = new Node(value, null, null);
      tail = head;
    } else {
      var newNode = new Node(value, tail, null);
      tail.next = newNode;
      tail = newNode;
    }
  };

  this.search = function (value) {
    var currentNode = head;
    while (currentNode !== tail) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        break;
      }
    }
    if (currentNode.value !== value) {
      return null;
    }
    return currentNode;
  };

  this.size = function () {
    var count = 0;
    var currentNode = head;
    if (!!head && !!head.next) {
      count = 1;
      while (tail.value !== currentNode.value) {
        currentNode = currentNode.next;
        count++;
      }
      console.log("Correct");
    } else if (!!head) {
      console.log("WRONG");
      count = 1;
    } else {
      count = 0;
    }
    return count;
  };

  this.remove = function (value) {
    if (head.value === value) {
      head.next.prev = null;
      head = head.next;
    } else if (tail.value === value) {
      tail.prev.next = null;
      tail = tail.prev;
    } else {
      if (this.search(value) === null) {
        return null;
      }
      this.search(value).prev.next = this.search(value).next;
      this.search(value).next.prev = this.search(value).prev;
    }
    return value;
  };

  this.toString = function () {
    var string = [];
    var current = head;
    var collection = [current.value];
    var i;
    while (tail.value !== current.value) {
      current = current.next;
      collection.push(current.value);
    }
    for (i = 0; i < collection.length; i++) {
      console.log('running');
      if (typeof collection[i] === "string") {
        string.push('"' + collection[i] + '"');
      } else {
        string.push(collection[i]);
      }
    }
    return string.join(", ");
  };
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList
};

// var ll = new LinkedList();
// ll.insert('hi');
// ll.insert(2);
// ll.insert('man');
// ll.toString();
