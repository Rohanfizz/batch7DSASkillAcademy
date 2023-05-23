var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var root = construct(arr, 0, arr.length - 1);
// display(root);
function construct(arr, l, r) {
    if (l > r)
        return null;
    var midIdx = Math.floor((l + r) / 2);
    var me = new TreeNode(arr[midIdx]);
    me.left = construct(arr, l, midIdx - 1);
    me.right = construct(arr, midIdx + 1, r);
    return me;
}
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
function find(root, data) {
    if (root == null)
        return false;
    if (root.val == data)
        return true;
    else if (root.val < data)
        return find(root.right, data);
    else if (root.val > data)
        return find(root.left, data);
    return false; //dummy return
}
console.log(find(root, 50));
