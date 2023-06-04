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
var q = new Queue();
q.push(5);
q.push(10);
console.log(q.pop()); //5
console.log(q.front()); // 10
console.log(q.getSize()); //1
