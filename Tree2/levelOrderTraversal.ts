/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let res : number[][] = [];
    let q :TreeNode[] = [];
    q.push(root);

    while(q.length>0){
        let currLevelCount = q.length;
        let currLevelPeople :number[] = [];
        while(currLevelCount > 0){
            let currNode :TreeNode = q.shift();

            currLevelPeople.push(currNode.val);

            if(currNode.left != null) q.push(currNode.left);
            if(currNode.right != null) q.push(currNode.right);

            currLevelCount--;
        }
        res.push(currLevelPeople);
    }
    return res;
};










