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
