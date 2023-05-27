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
        this.addAt = function (val, idx) {
            if (idx == 0) {
                this.addFirst(val);
                return;
            }
            else if (idx == this.size) {
                this.addLast(val);
                return;
            }
            else if (idx > this.size || idx < 0) {
                console.log("Index out of bounds!");
                return;
            }
            var newNode = new ListNode(val);
            var nodeAtIdx = this.getNodeAt(idx);
            var nodeAtIdxm1 = this.getNodeAt(idx - 1);
            nodeAtIdxm1.next = newNode;
            newNode.next = nodeAtIdx;
            this.size++;
        };
        this.removeAt = function (idx) {
            if (idx == 0) {
                return this.removeFirst();
            }
            else if (idx == this.size - 1) {
                return this.removeLast();
            }
            else if (idx < 0 || idx >= this.size) {
                console.log("Index Out Of Bounds!");
                return -1;
            }
            var prev = this.getNodeAt(idx - 1);
            var data = prev.next.val;
            prev.next = prev.next.next;
            this.size--;
            return data;
        };
        this.reverseBruteForce = function () {
            var left = 0;
            var right = this.size - 1;
            while (left < right) {
                var lnode = this.getNodeAt(left);
                var rnode = this.getNodeAt(right);
                var temp = lnode.val;
                lnode.val = rnode.val;
                rnode.val = temp;
                left++;
                right--;
            }
        };
        this.reverseOptimized = function () {
            if (this.size == 0 || this.size == 1)
                return;
            var prev = null;
            var curr = this.head;
            var next = curr.next;
            while (curr != null) {
                curr.next = prev;
                prev = curr;
                curr = next;
                if (next != null)
                    next = next.next;
            }
            this.tail = this.head;
            this.head = prev;
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
ll.display();
ll.reverseOptimized();
ll.display();
