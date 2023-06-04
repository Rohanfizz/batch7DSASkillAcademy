class ListNode {
    val: number;
    next: ListNode | null;
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addLast = (x: number) => {
        let nn = new ListNode(x);
        if (this.tail == null) {
            this.head = nn;
            this.tail = nn;
            this.size++;
            return;
        }
        this.tail.next = nn;
        this.tail = nn;
        this.size++;
    };
    removeFirst = function (): number {
        if (this.head == null) {
            console.log("Linkedlist Underflow!");
            return -1;
        }
        let retVal = this.head.val;
        this.head = this.head.next;
        this.size--;
        return retVal;
    };
    getSize = function (): number {
        return this.size;
    };
    getFirst = function (): number {
        if (this.head == null) {
            console.log("Linkedlist Underflow!");
            return -1;
        }
        return this.head.val;
    };
}

class Queue{
    ll : LinkedList;

    constructor(){
        this.ll = new LinkedList();
    }

    push=function(x:number){
        this.ll.addLast(x);
    }
    pop=function():number{
        return this.ll.removeFirst();
    }
    getSize=function(){
        return this.ll.getSize();
    }
    front=function(){
        return this.ll.getFirst();
    }
}

let q = new Queue();
q.push(5);
q.push(10);
console.log(q.pop()); //5
console.log(q.front()); // 10
console.log(q.getSize()); //1