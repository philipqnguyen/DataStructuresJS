var linkedList = require("../lib/linked_list.js");
var assert = require("assert");
var should = require('should');
var ll = new linkedList.LinkedList();

var binarySearchTree = require('../lib/binary_search_tree.js');
var bst = new binarySearchTree.BinarySearchTree();

describe('LinkedList', function(){
  describe('#insert()', function(){
    it('should return increased size by one when with new insert', function(){
      ll.insert('hello');
      ll.insert('booze');
      ll.insert('bobo');
      ll.insert(2);
      ll.insert('bob');

      should.equal(5, ll.size());
    });

    it('should return the node of the found search item', function() {
      should.equal('bobo', ll.search('bobo').value);
    });

    it('should return nil if search cannot find the node', function() {
      should.equal(null, ll.search('cowabunga'));
    });

    it('should return the proper size', function() {
      should.equal(5, ll.size());
    });

    it('should remove a node', function() {
      // ll.insert('bobo');
      ll.remove('bob');
      should.equal(4, ll.size());
    });

    it('should return null when removing a unincluded node', function(){
      should.equal(null, ll.remove('cowabunga'));
    });

    it('should return a string', function() {
      should.equal('"hello", "booze", "bobo", 2', ll.toString())
    });
  });
});

describe('Binary Search Tree', function () {
  it('should insert a value and report if it contains the value', function () {
    bst.insert(50);
    bst.contains(50).should.equal(true);
  });

  it('should have multiple values, and report the values', function () {
    bst.insert(44);
    bst.insert(99);
    bst.insert(75);
    bst.insert(41);
    bst.insert(21);
    bst.insert(66);
    bst.insert(77);
    bst.insert(1);

    bst.contains(21).should.equal(true);
    bst.contains(1).should.equal(true);
    bst.contains(99).should.equal(true);
    bst.contains(77).should.equal(true);
    bst.contains(50).should.equal(true);
  });

  it('should NOT return true if it does not contain the value', function () {

    bst.contains(90).should.equal(false);
  });

  it('should return the correct depth', function () {
    console.log(bst);
    bst.depth().should.equal(5);
  });

  it('should return the correct balance', function () {
    bst.balance().should.equal(0);
  });

  it('should return the correct balance when left is higher', function () {
    bst.insert(45);
    bst.balance().should.equal(1);
  });

  it('should return the correct balance when right is higher', function () {
    bst.insert(101);
    bst.insert(79);
    bst.insert(67);

    bst.balance().should.equal(-2);
  });
});
