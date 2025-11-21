"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = require("./tree");
// DFS traversals
//left->root->right ^
var Inorder = function (pRoot) {
    if (!pRoot)
        return;
    Inorder(pRoot.left);
    console.log(pRoot.val + "\t");
    Inorder(pRoot.right);
};
//root->left-right <
var Preorder = function (pRoot) {
    if (!pRoot)
        return;
    console.log(pRoot.val + "\t");
    Preorder(pRoot.left);
    Preorder(pRoot.right);
};
//left, right, root >
var Postorder = function (pRoot) {
    if (!pRoot)
        return;
    Postorder(pRoot.left);
    Postorder(pRoot.right);
    console.log(pRoot.val + "\t");
};
// BFS traversals
var LevelOrder = function (pRoot) {
    if (!pRoot)
        return;
    var queue = [];
    queue.unshift(pRoot);
    while (queue.length !== 0) {
        var curr = queue.pop();
        if (!curr)
            return;
        console.log(curr.val + "\t");
        if (curr.left)
            queue.unshift(curr.left);
        if (curr.right)
            queue.unshift(curr.right);
    }
};
// 1
// 2       3
// 4       5       6
var root = new tree_1.TreeNode(1, null, null);
root.left = new tree_1.TreeNode(2, null, null);
root.right = new tree_1.TreeNode(3, null, null);
root.left.left = new tree_1.TreeNode(4, null, null);
root.left.right = new tree_1.TreeNode(5, null, null);
root.right.right = new tree_1.TreeNode(6, null, null);
console.log("Inorder: \n");
Inorder(root);
console.log("\nPreorder: \n");
Preorder(root);
console.log("\nPostOrder: \n");
Postorder(root);
console.log("\nLevelOrder: \n");
LevelOrder(root);
