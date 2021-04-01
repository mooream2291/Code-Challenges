'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var invertTree = function(root) {

  //check if root if tree is empty (error checking)

  //use in-order approach to swap at each iteratio

  // set a var to temp = root.left

  // do the swap

  // set root.left to = root.right
  // set root.right to be new temp 

  //recursively call function on root.left
  //recursively call function on root.right

  if (root !== null) {

    let temp = root.left
    root.left = root.right
    root.right = temp;

    invertTree (root.left);
    invertTree (root.right);

  }
    return root;
};