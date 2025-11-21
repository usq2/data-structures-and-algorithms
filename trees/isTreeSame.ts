import { TreeNode } from "./tree";

//recursive dfs
const isTreeSame = (pRoot1: TreeNode|null|undefined, pRoot2: TreeNode|null|undefined):boolean => {

    if (!pRoot1 && !pRoot2) {
        return true
    }
    if (!pRoot1 || !pRoot2) {
        return false
    }

    if (pRoot1?.val !== pRoot2?.val) {
        return false
    }

    return isTreeSame (pRoot1?.left, pRoot2?.left) && isTreeSame(pRoot1?.right, pRoot2?.right)
}