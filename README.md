# Data Structures in JavaScript

Implementations of common data structures in JavaScript

By [Philip Q Nguyen](https://github.com/philipqnguyen)

## Specs

`mocha spec/spec.js`

## Linked List

Usage:

``` JavaScript
var ll = new LinkedList();
ll.insert('hi');
ll.insert(2);
ll.insert('man');
ll.toString(); //=> "hi", 2, "man"
ll.remove('man');
ll.toString(); //=> "hi", 2
```

## Binary Search Tree

If a number is larger than the root, it will be on the right, otherwise it is on the left.

``` JavaScript
var bst = new BinarySearchTree();

bst.insert(50);
bst.insert(55);
bst.insert(45);
// now the tree 50 has a right leaf with a value of 55 and a left leaf with a value of 45.

bst.insert(46); // now the value 45 has a right leaf of 46.

bst.contains(46); // returns true because 46 is found within the tree.

bst.size(); // returns the number of nodes within the tree structure.

bst.depth() // return the depth level of the tree. In this case it will return 3.

bst.balance() // returns an integer, positive or negative. It will return a negative number if the right side of the root has more nodes. It will return a positive number if the left side is larger than the root. If there are equal number of nodes on both sides of the root, it will return 0.
```
