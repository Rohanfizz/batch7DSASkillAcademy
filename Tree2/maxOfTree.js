var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function display(node) {
    if (node == null)
        return;
    var s = "";
    s += node.val + ": ";
    //left
    if (node.left != null)
        s += node.left.val + ", ";
    else
        s += "-1, ";
    //right
    if (node.right != null)
        s += node.right.val;
    else
        s += "-1";
    console.log(s);
    display(node.left);
    display(node.right);
}
function constructTree(tree) {
    if (tree[idx] == -1) {
        idx++;
        return null;
    }
    //this means  we have to create a node
    var node = new TreeNode(tree[idx]);
    idx++;
    node.left = constructTree(tree);
    node.right = constructTree(tree);
    return node;
}
var tree = [5, 1, 3, -1, -1, 4, 3, -1, -1, -1, 2, 6, -1, 7, -1, -1, -1];
var idx = 0;
var root = constructTree(tree);
function maxValueOfTree(root) {
    if (root == null)
        return -Infinity;
    var maxInLeft = maxValueOfTree(root.left);
    var maxInRight = maxValueOfTree(root.right);
    return Math.max(root.val, Math.max(maxInLeft, maxInRight));
}
console.log("Max: " + maxValueOfTree(root));
