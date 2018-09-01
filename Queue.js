class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Queue  {
    constructor() {
        this._length = 0;
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            let lastNode = this.last;
            lastNode.next = node;
            this.last = node;
        }
        this._length++;
        return node;
    }

    dequeue() {
        if(this.first) {
            let nextNode = this.first.next;
            if(nextNode) {
                this.first = nextNode;
                this._length--;
            } else {
                this.last = null;
                this.first = null;
                this._length--;
            }
        }
    }
}

let queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);