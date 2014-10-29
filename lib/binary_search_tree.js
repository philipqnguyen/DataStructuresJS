function Tree (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function BinarySearchTree() {
  this.root = null;
  this.count = 0;
  this.insert = function (value) {
    if (this.root === null) {
      this.root = new Tree(value, null, null);
      this.count++;
    } else {
      this.traverse(value);
      this.count++;
    }
  };
  this.size = function () {
    return this.count;
  };
  this.traverse = function (value, root) {
    if (typeof(root) === 'undefined') {
      var root = this.root;
    }
    var current_root = root;

    if (value > current_root.value && current_root.right === null) {
      current_root.right = new Tree(value, null, null);
      return true;
    } else if (value < current_root.value && current_root.left === null) {
      current_root.left = new Tree(value, null, null);
      return true;
    }

    if (value > current_root.value) {
      this.traverse(value, current_root.right);
    } else {
      this.traverse(value, current_root.left);
    }
  };

  this.search = function (value, root) {
    if (typeof(root) === 'undefined') {
      var root = this.root;
    }

    var current_root = root;

    if (current_root.value === value){
      return true;
    } else if (current_root.right === null && current_root.left === null) {
      return false;
    }

    if (value > current_root.value) {
      return this.search(value, current_root.right);
    } else {
      return this.search(value, current_root.left);
    }
  };

  this.contains = function (value) {
    if (this.root.value === value) {
      return true;
    } else {
      return this.search(value);
    }
  };

  this.depth = function (current_root, depth) {
    if (typeof(current_root) === 'undefined') {
      var current_root = this.root;
    }
    if (typeof(depth) === 'undefined') {
      var depth = 0;
    }
    if (current_root === null) {
      return depth;
    }

    depth++;

    var left = this.depth(current_root.left, depth);
    var right = this.depth(current_root.right, depth);

    if(left > right) {
      return left;
    } else {
      return right;
    }
  };

  this.left = 0;
  this.right = 0;

  this.balance = function (current_root) {
    if (typeof(current_root) === 'undefined') {
      var current_root = this.root;
      this.left = 0;
      this.right = 0;
    }

    if (current_root === null) {
      return;
    } else if (current_root !== null && current_root !== this.root) {
      if (current_root.value < this.root.value) {
        this.left++;
      } else {
        this.right++;
      }
    }

    this.balance(current_root.left);
    this.balance(current_root.right);


      return this.left - this.right;
  };
}

module.exports = {
  BinarySearchTree: BinarySearchTree
};
