import { TreeNode } from "./tree";

const maxDepth=(pRoot:TreeNode|null)=>{

    if(!pRoot) {
        return 0
    }

    const leftHeight:number = maxDepth(pRoot.left)
    const rightHeight:number = maxDepth(pRoot.right)

    return 1 + Math.max(leftHeight, rightHeight)
}

const maxDepthIterative = (pRoot: TreeNode) => {
    
    if (!pRoot) return 0

    const queue: Array<TreeNode> = []
    queue.unshift(root)
    let depth = 0
    while (queue.length !== 0) {
        let levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const item = queue.pop()
            if (item?.right) queue.unshift(item.right)
            if(item?.left) queue.unshift(item.left)
        }
        depth++
    }
    return depth
}
const root = new TreeNode(1, null, null);
root.left = new TreeNode(2, null, null);
root.right = new TreeNode(3, null, null);
root.left.left = new TreeNode(4, null, null);
root.left.right = new TreeNode(5, null, null);
root.left.right.right = new TreeNode(6, null, null)

console.log (maxDepthIterative(root), maxDepth(root))