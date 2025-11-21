import { TreeNode } from "./tree";

// DFS traversals
//left->root->right ^
const Inorder = (pRoot: TreeNode|null) => {

    if (!pRoot) return;
    Inorder(pRoot.left);
    console.log (pRoot.val + "\t")
    Inorder(pRoot.right);
}

//root->left-right <
const Preorder = (pRoot: TreeNode|null) => {

    if (!pRoot) return;
    console.log (pRoot.val + "\t");
    Preorder (pRoot.left);
    Preorder (pRoot.right);
}

//left, right, root >
const Postorder = (pRoot: TreeNode| null) => {

    if (!pRoot) return;
    Postorder(pRoot.left)
    Postorder(pRoot.right)
    console.log(pRoot.val +"\t");

}

// BFS traversals

const LevelOrder = (pRoot:TreeNode|null) => {

    if (!pRoot) return;

    const queue: Array<TreeNode> = []

    queue.unshift (pRoot)

    while (queue.length !== 0) {

        const curr:TreeNode|undefined = queue.pop()
        if (!curr) return;
        console.log(curr.val + "\t");
        if (curr.left) queue.unshift(curr.left)
        if (curr.right) queue.unshift(curr.right)
    }
}



        // 1
    // 2       3
// 4       5       6
const root = new TreeNode(1, null, null)
root.left = new TreeNode(2, null, null)
root.right = new TreeNode(3, null, null)
root.left.left = new TreeNode(4, null, null)
root.left.right = new TreeNode (5, null, null)

root.right.right = new TreeNode(6, null, null)
console.log ("Inorder: \n")
Inorder(root);
console.log ("\nPreorder: \n")
Preorder(root);
console.log ("\nPostOrder: \n")
Postorder(root);
console.log ("\nLevelOrder: \n")
LevelOrder(root)