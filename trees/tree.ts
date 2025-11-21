export class TreeNode {
    constructor (val: Number, left: TreeNode|null, right: TreeNode|null) {
        this.val = val,
        this.left = left,
        this.right = right
    }
    val: Number;
    left: TreeNode|null;
    right: TreeNode|null;
}