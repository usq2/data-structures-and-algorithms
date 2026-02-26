"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var arr = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
var PrintInorderFromArr = function (pArr) {
    var stack = [0];
    while (stack.length > 0) {
        var curr = stack[stack.length - 1];
        // if pArr[i].left is null, pop from stack and print
        if (!pArr[(curr + 1) * 2 - 1]) {
          var elem = stack.pop();
          console.log(pArr[elem] + "   ", curr);
          // if pArr[i].right then push that to stack
          if (pArr[((elem + 1) * 2 + 1) -1]) {
            stack.push(((elem + 1) * 2 + 1) -1);
          } else {
            stack.pop()
          }
        }
        else {
            stack.push(((curr + 1) * 2) - 1);
            continue;
        }
       
        stack.forEach(function (elem) { return console.log(elem); });
    }
};
PrintInorderFromArr(arr);
//         // 1
//     // 2       3
// // 4       5       6
// const root = new TreeNode(1, null, null)
// root.left = new TreeNode(2, null, null)
// root.right = new TreeNode(3, null, null)
// root.left.left = new TreeNode(4, null, null)
// root.left.right = new TreeNode (5, null, null)
// root.right.right = new TreeNode(6, null, null)
// console.log ("Inorder: \n")
// Inorder(root);
// console.log ("\nPreorder: \n")
// Preorder(root);
// console.log ("\nPostOrder: \n")
// Postorder(root);
// console.log ("\nLevelOrder: \n")
// LevelOrder(root)
