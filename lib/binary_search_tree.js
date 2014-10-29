function Tree (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function BinarySearchTree() {
  this.root = null;
  this.count = 0;
  this.levels = 0;
  this.insert = function (value) {
    if (this.root === null) {
      this.root = new Tree(value, null, null);
      this.count++;
      this.levels++;
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
      if (current_root.left === null){
        this.levels++;
      }
      return true;
    } else if (value < current_root.value && current_root.left === null) {
      current_root.left = new Tree(value, null, null);
      if (current_root.right === null){
        this.levels++;
      }
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
}

module.exports = {
  BinarySearchTree: BinarySearchTree
};
