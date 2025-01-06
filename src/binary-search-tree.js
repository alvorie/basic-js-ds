const { NotImplementedError, ListNode } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
    }
    else {
      let prev = null;
      let curr = this._root;
      while (curr) {
        prev = curr;
        if (data < curr.data) {
          curr = curr.left;
        }
        else if (data > curr.data) {
          curr = curr.right;
        }
      }
      if (data < prev.data) {
        prev.left = new Node(data);
      }
      else if (data > prev.data) {
        prev.right = new Node(data);
      }
      else {
        return;
      }
    }
  }

  has(data) {
    if (this._root === null) {
      return false;
    }
    let curr = this._root;
    while (curr) {
      if (data < curr.data) {
        curr = curr.left;
      }
      else if (data > curr.data) {
        curr = curr.right;
      }
      else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    if (this._root === null) {
      return null;
    }
    let curr = this._root;
    while (curr) {
      if (data < curr.data) {
        curr = curr.left;
      }
      else if (data > curr.data) {
        curr = curr.right;
      }
      else {
        return curr;
      }
    }
    return null;
  }

  getSuccessor(node) {
    // find the smallest node in the right subtree
    let curr = node.right; 
    while (curr && curr.left) { 
      curr = curr.left;
    }
    return curr; 
  }  


  remove(data, node = this._root) {
    if (!node) return null; 
  
    if (data < node.data) {
      node.left = this.remove(data, node.left); 
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      // Node to be removed found
      if (!node.left) return node.right;
      if (!node.right) return node.left; 
  
      let successor = this.getSuccessor(node); 
      node.data = successor.data; 
      node.right = this.remove(successor.data, node.right);
    }
  
    return node;
  }
  

  min() {
    if (!this._root) return null;
    let curr = this._root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    if (!this._root) return null;
    let curr = this._root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};