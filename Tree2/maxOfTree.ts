class TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;

    constructor(val:number){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function display(node:TreeNode | null) : void{
    if(node == null) return;
    let s:string = "";
    s+=node.val+": ";

    //left
    if(node.left != null) s+=node.left.val+", ";
    else s+="-1, ";

    //right
    if(node.right != null) s+=node.right.val;
    else s+="-1";

    console.log(s);

    display(node.left);
    display(node.right);
}

function constructTree(tree:number[]) : TreeNode | null{
    if(tree[idx] == -1){
        idx++;
        return null;
    }
    //this means  we have to create a node
    let node:TreeNode = new TreeNode(tree[idx]);
    idx++;
    node.left = constructTree(tree);
    node.right= constructTree(tree);

    return node;
}
let tree = [5,1,3,-1,-1,4,8,-1,-1,-1,2,6,-1,7,-1,-1,-1];
let idx = 0;


let root = constructTree(tree);

function maxValueOfTree(root:TreeNode | null) : number{
    if(root == null) return -Infinity;
    let maxInLeft:number = maxValueOfTree(root.left);
    let maxInRight:number = maxValueOfTree(root.right);
    return Math.max(root.val , Math.max(maxInLeft,maxInRight));
}

console.log("Max: " + maxValueOfTree(root));