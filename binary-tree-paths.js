'use strict';

//Given the root of a binary tree, return all root-to-leaf paths in any order.

var binaryTreePaths = function(root) {
    let result = [];
      function getPaths(root, weight) {
        if (root.val !== null) {
          if (root.left == null && root.right == null) {
          weight += root.val;
          result.push(weight);
          return;
        }
            getPaths(root.left, weight + root.val);
            getPaths(root.left, weight + root.val);
      }
    }
      return result;
  };
