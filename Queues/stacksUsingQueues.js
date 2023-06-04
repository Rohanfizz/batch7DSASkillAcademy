var ListNode = /** @class */ (function () {
    function ListNode(x) {
        this.val = x;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.addLast = function (x) {
            var nn = new ListNode(x);
            if (_this.tail == null) {
                _this.head = nn;
                _this.tail = nn;
                _this.size++;
                return;
            }
            _this.tail.next = nn;
            _this.tail = nn;
            _this.size++;
        };
        this.removeFirst = function () {
            if (this.head == null) {
                console.log("Linkedlist Underflow!");
                return -1;
            }
            var retVal = this.head.val;
            this.head = this.head.next;
            this.size--;
            if (this.size == 0)
                this.tail = null;
            return retVal;
        };
        this.getSize = function () {
            return this.size;
        };
        this.getFirst = function () {
            if (this.head == null) {
                console.log("Linkedlist Underflow!");
                return -1;
            }
            return this.head.val;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.push = function (x) {
            this.ll.addLast(x);
        };
        this.pop = function () {
            return this.ll.removeFirst();
        };
        this.getSize = function () {
            return this.ll.getSize();
        };
        this.front = function () {
            return this.ll.getFirst();
        };
        this.ll = new LinkedList();
    }
    return Queue;
}());
var StackUsingQueues = /** @class */ (function () {
    function StackUsingQueues() {
        this.push = function (x) {
            //move all elements of q1 to q2
            while (this.q1.getSize() > 0) {
                this.q2.push(this.q1.pop());
            }
            //add the new element in q1
            this.q1.push(x);
            //move back all elements of q2 to q1
            while (this.q2.getSize() > 0) {
                this.q1.push(this.q2.pop());
            }
        };
        this.pop = function () {
            return this.q1.pop();
        };
        this.getSize = function () {
            return this.q1.getSize();
        };
        this.top = function () {
            return this.q1.front();
        };
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    return StackUsingQueues;
}());
var stq = new StackUsingQueues();
stq.push(5);
stq.push(10);
console.log(stq.pop()); //10
stq.push(100);
console.log(stq.top()); //100
console.log(stq.getSize()); //2
