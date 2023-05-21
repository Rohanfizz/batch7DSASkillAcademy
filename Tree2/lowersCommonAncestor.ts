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

function nodeToRootPath(node: TreeNode | null , data:number):TreeNode[]{
    if(node == null) return [];
    if(node.val == data) return [node];

    let left= nodeToRootPath(node.left,data);
    if(left.length >0){
        left.push(node);
        return left;
    }

    let  right = nodeToRootPath(node.right,data);
    if(right.length > 0){
        right.push(node);
        return right;
    }
    return [];
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let ntrp1 = nodeToRootPath(root,p.val);
	let ntrp2 = nodeToRootPath(root,q.val);
    let i =ntrp1.length-1;
    let j = ntrp2.length-1;
    while(i>=0 && j>=0 && ntrp1[i].val == ntrp2[j].val){
        i--;
        j--;
    }
    return ntrp1[i+1];
};












