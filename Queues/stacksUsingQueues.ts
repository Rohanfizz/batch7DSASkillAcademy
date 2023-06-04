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
        if(this.size == 0) this.tail = null;
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

class StackUsingQueues{

    q1:Queue;
    q2:Queue;

    constructor(){
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push=function(x:number){
        //move all elements of q1 to q2
        while(this.q1.getSize() > 0){
            this.q2.push(this.q1.pop());
        }
        //add the new element in q1
        this.q1.push(x);
        //move back all elements of q2 to q1
        while(this.q2.getSize() > 0){
            this.q1.push(this.q2.pop());
        }
    }

    pop=function():number{
        return this.q1.pop();
    }

    getSize=function():number{
        return this.q1.getSize();
    }
    top=function():number{
        return this.q1.front();
    }
}

let stq = new StackUsingQueues();

stq.push(5);
stq.push(10);
console.log(stq.pop());//10
stq.push(100);
console.log(stq.top());//100
console.log(stq.getSize());//2

