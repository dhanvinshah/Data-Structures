class Node {
    constructor(value) {
        this.data = value;
        this.previous = null;
    }
}

class Stack {
    constructor() {
        this._length = 0;
        this.head = null;
    }

    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let previousNode = this.head;
            node.previous = previousNode;
            this.head = node;
        }

        this._length++;
        return node;
    }

    pop() {
        if (this.head) {
            let previousNode = this.head.previous;
            this.head = previousNode;
            this._length--;
        }
    }
    peek() {
        if (this.head) {
            return this.head;
        } else {
            return null;
        }
    }
}

let stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();

let node = stack.peek();

console.log(stack);