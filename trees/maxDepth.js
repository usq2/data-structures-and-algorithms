"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("./tree");
var maxDepth = function (pRoot) {
    if (!pRoot) {
        return 0;
    }
    var leftHeight = maxDepth(pRoot.left);
    var rightHeight = maxDepth(pRoot.right);
    return 1 + Math.max(leftHeight, rightHeight);
};
var maxDepthIterative = function (pRoot) {
    if (!pRoot)
        return 0;
    var queue = [];
    queue.unshift(root);
    var depth = 0;
    while (queue.length !== 0) {
        var levelSize = queue.length;
        for (var i = 0; i < levelSize; i++) {
            var item = queue.pop();
            if (item === null || item === void 0 ? void 0 : item.right)
                queue.unshift(item.right);
            if (item === null || item === void 0 ? void 0 : item.left)
                queue.unshift(item.left);
        }
        depth++;
    }
    return depth;
};
var root = new tree_1.TreeNode(1, null, null);
root.left = new tree_1.TreeNode(2, null, null);
root.right = new tree_1.TreeNode(3, null, null);
root.left.left = new tree_1.TreeNode(4, null, null);
root.left.right = new tree_1.TreeNode(5, null, null);
root.left.right.right = new tree_1.TreeNode(6, null, null);
console.log(maxDepthIterative(root), maxDepth(root));
