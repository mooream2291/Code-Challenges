//Given the root of a binary tree, return the inorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//scoping issue?
var inorderTraversal = function (root) {
  var result = [];
  function traverseInOrder(root) {
      if (root !== null) {
          root.left && traverseInOrder(root.left);
          result.push(root.val);
          root.right && traverseInOrder(root.right);
      }
      traverseInOrder(root);
      return result;
  }
}

//gets a runtime error
inOrder = function () {
  if (this.root == null) {
      return null;
  } else {
      var result = [];
      function traverseInOrder(node) {
          node.left && traverseInOrder(node.left);
          result.push(node.value);
          node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
  }
}