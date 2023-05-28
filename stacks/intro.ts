class ListNode {
    val: number;
    next: ListNode | null;
    constructor(data: number) {
        this.val = data;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;
    // getSize: ()=>number = ()=>{
    //     return this.size;
    // }

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize = function(){
        return this.size;
    }

    display  = function(){
        let temp :ListNode | null = this.head;
        let s : string = "";
        
        while(temp != null){//this loop will keep on going  until temp comes to null
            s+= temp.val + " -> ";
            temp = temp.next;
        }

        s+= "null";
        console.log(s);
    }

    addFirst = function(data:number){
        let newNode = new ListNode(data);

        newNode.next= this.head;
        this.head = newNode;
        if(this.size == 0) this.tail = newNode;
        this.size++;
    }

    addLast = function(data:number){
        let newNode = new ListNode(data);

        if(this.size == 0){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.size++;
    }

    removeFirst = function():number{
        if(this.size == 0){
            console.log("LinkedList is already empty!");
            return -1;
        }else if(this.size == 1){
            let res = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return res;    
        }
        let res = this.head.val;
        this.head = this.head.next;
        this.size--;
        return res;
    }

    removeLast = function():number{
        if(this.size == 0){
            console.log("LinkedList is already empty!");
            return -1;
        }else if(this.size == 1){
            let res = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return res;    
        }
        let temp = this.head;
        while(temp.next != this.tail){
            temp = temp.next;
        }
        let res:number = this.tail.val;
        this.tail = temp;
        this.tail.next = null;
        this.size--;
        return res;
    }

    getNodeAt = function(idx:number):ListNode | null{
        if(idx < 0 || idx>=this.size){
            console.log("Index out of bounds!");
            return null;
        }
        let temp = this.head;
        let currIdx = 0;
        while(currIdx != idx){
            temp = temp.next;
            currIdx++;
        }
        return temp;
    }

    getValueAt = function(idx:number):number{
        let node = this.getNodeAt(idx);
        if(node == null) return -1;
        return node.val;
    }

    addAt = function(val:number, idx:number){
        if(idx == 0){
            this.addFirst(val);
            return;
        }else if(idx == this.size){
            this.addLast(val);
            return;
        }else if(idx > this.size || idx < 0){
            console.log("Index out of bounds!");
            return;
        }
        let newNode = new ListNode(val);
        let nodeAtIdx = this.getNodeAt(idx);
        let nodeAtIdxm1 = this.getNodeAt(idx-1);
        nodeAtIdxm1.next = newNode;
        newNode.next = nodeAtIdx;
        this.size++;
    }

    removeAt = function(idx:number) : number{
        if(idx == 0){
            return this.removeFirst();
        }else if(idx == this.size-1){
            return this.removeLast();
        }else if(idx < 0 || idx >= this.size){
            console.log("Index Out Of Bounds!");
            return -1;
        }
        let prev = this.getNodeAt(idx-1);
        let data = prev.next.val;
        prev.next = prev.next.next;
        this.size--;
        return data;
    }

    reverseBruteForce = function(){
        let left = 0;
        let right = this.size-1;
        while(left < right){
            let lnode = this.getNodeAt(left);
            let rnode = this.getNodeAt(right);

            let temp = lnode.val;
            lnode.val = rnode.val;
            rnode.val = temp;

            left++;
            right--;
        }
    }
    reverseOptimized = function (){
        if(this.size==0 || this.size == 1) return;

        let prev  = null;
        let curr = this.head;
        let next = curr.next;
        
        while(curr != null){
            curr.next = prev;
            prev = curr;
            curr = next;
            if(next != null) next = next.next;
        }

        this.tail = this.head;
        this.head = prev;
    }
}

class Stack{
    ll= new LinkedList();

    push=function(val:number){
        this.ll.addFirst(val);
    }

    pop=function(){
        return this.ll.removeFirst();
    }

    top=function(){
        return this.ll.getValueAt(0);
    }

    size=function(){
        return this.ll.getSize();
    }

}

let st = new Stack();
st.push(10);
st.push(20);
console.log(st.top());
st.pop();
console.log(st.top());
st.pop();
console.log(st.top());