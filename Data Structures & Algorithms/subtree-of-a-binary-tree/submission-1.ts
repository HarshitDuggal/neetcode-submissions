/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSameTree(root1:TreeNode | null ,root2: TreeNode | null):boolean{
        if(root1 === null && root2 === null) return true;
        if((root1 === null && root2 !== null) || (root1 !==null && root2 === null) ) return false
        const leftT = this.isSameTree(root1.left, root2.left);
        const rightT = this.isSameTree(root1.right, root2.right);

        return (root1.val === root2.val) && (leftT && rightT);
    }
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
       if(root === null) return false;
       if(root.val === subRoot.val) {
        const same = this.isSameTree(root,subRoot);
        if(same) return true
       }

        const leftSub = this.isSubtree(root.left,subRoot);
        const rightSub = this.isSubtree(root.right,subRoot);

      return leftSub || rightSub;

    }
}