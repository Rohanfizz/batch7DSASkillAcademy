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
var tree = [5, 1, 3, -1, -1, 4, 8, -1, -1, -1, 2, 6, -1, 7, -1, -1, -1];
var idx = 0;
var root = constructTree(tree);
display(root);
function size(node) {
    if (node == null)
        return 0;
    var left = size(node.left);
    var right = size(node.right);
    return left + right + 1;
}
function height(node) {
    if (node == null)
        return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}
console.log("Size: " + size(root));
console.log("Height: " + height(root));
