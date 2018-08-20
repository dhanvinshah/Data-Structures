class Node {
    constructor(value) {
        this.data = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
    }

    addToEnd(value) {
        let node = new Node(value);
    }

    addToHead(value) {
        let node = new Node(value);
        let currentNode = this.head;

        if (!this.head) {
            this.head = node;
            this._length++;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
            this._length++;
        }

        return node;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addToHead(100);
doublyLinkedList.addToHead(200);
doublyLinkedList.addToHead(300);

console.log(doublyLinkedList);