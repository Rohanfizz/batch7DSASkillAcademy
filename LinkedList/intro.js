var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.val = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    // getSize: ()=>number = ()=>{
    //     return this.size;
    // }
    function LinkedList() {
        this.getSize = function () {
            return this.size;
        };
        this.display = function () {
            var temp = this.head;
            var s = "";
            while (temp != null) { //this loop will keep on going  until temp comes to null
                s += temp.val + " -> ";
                temp = temp.next;
            }
            s += "null";
            console.log(s);
        };
        this.addFirst = function (data) {
            var newNode = new ListNode(data);
            newNode.next = this.head;
            this.head = newNode;
            if (this.size == 0)
                this.tail = newNode;
            this.size++;
        };
        this.addLast = function (data) {
            var newNode = new ListNode(data);
            if (this.size == 0) {
                this.head = newNode;
                this.tail = newNode;
                this.size++;
                return;
            }
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.size++;
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                console.log("LinkedList is already empty!");
                return -1;
            }
            else if (this.size == 1) {
                var res_1 = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return res_1;
            }
            var res = this.head.val;
            this.head = this.head.next;
            this.size--;
            return res;
        };
        this.removeLast = function () {
            if (this.size == 0) {
                console.log("LinkedList is already empty!");
                return -1;
            }
            else if (this.size == 1) {
                var res_2 = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return res_2;
            }
            var temp = this.head;
            while (temp.next != this.tail) {
                temp = temp.next;
            }
            var res = this.tail.val;
            this.tail = temp;
            this.tail.next = null;
            this.size--;
            return res;
        };
        this.getNodeAt = function (idx) {
            if (idx < 0 || idx >= this.size) {
                console.log("Index out of bounds!");
                return null;
            }
            var temp = this.head;
            var currIdx = 0;
            while (currIdx != idx) {
                temp = temp.next;
                currIdx++;
            }
            return temp;
        };
        this.getValueAt = function (idx) {
            var node = this.getNodeAt(idx);
            if (node == null)
                return -1;
            return node.val;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addLast(10);
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.addLast(75);
ll.addFirst(100);
ll.display();
console.log(ll.getValueAt(5));
