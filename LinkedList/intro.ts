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

}

let ll = new  LinkedList();
ll.addLast(10);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.addLast(75);
ll.addFirst(100);

ll.display();

console.log(ll.getValueAt(5));
