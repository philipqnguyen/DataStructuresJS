var linkedList = require("../lib/linked_list.js");
var assert = require("assert");
var should = require('should');
var ll = new linkedList.LinkedList();

describe('LinkedList', function(){
  describe('#insert()', function(){
    it('should return increased size by one when with new insert', function(){
      ll.insert('hello');
      ll.insert('booze');
      ll.insert('bobo');
      ll.insert(2);
      ll.insert('bob');

      should.equal(5, ll.size());
    })

    it('should return the node of the found search item', function() {
      should.equal('bobo', ll.search('bobo').value);
    })

    it('should return nil if search cannot find the node', function() {
      should.equal(null, ll.search('cowabunga'));
    })

    it('should return the proper size', function() {
      should.equal(5, ll.size());
    })

    it('should remove a node', function() {
      // ll.insert('bobo');
      ll.remove('bob');
      should.equal(4, ll.size());
    })

    it('should return null when removing a unincluded node', function(){
      should.equal(null, ll.remove('cowabunga'));
    })

    it('should return a string', function() {
      should.equal('"hello", "booze", "bobo", 2', ll.toString())
    })
  })
})
