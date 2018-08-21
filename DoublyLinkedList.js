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

    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.data === value) return currentNode;
            else currentNode = currentNode.next;
        }

        return null;
    }

    delete(value) {
        let currentNode = this.head;
        if(currentNode.data == value) {
            this.head = currentNode.next;
            this.head.previous = null;
        }
        else {
            let previousNode = currentNode.previous;
            let nextNode = currentNode.next;
            while(currentNode) {
                if(currentNode.data === value) {
                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                    this._length--;
                    break;
                }
                else {
                    currentNode = currentNode.next;
                    previousNode = currentNode.previous;
                    nextNode = currentNode.next;
                }
            }
        }
    }

    addToEnd(value) {
        let node = new Node(value);
        let currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        node.previous = currentNode;
        this._length++;
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
doublyLinkedList.addToEnd(400);
doublyLinkedList.addToEnd(500);

// let node = doublyLinkedList.search(500);
// console.log(node);

// node = doublyLinkedList.search(1);
// console.log(node);

doublyLinkedList.delete(100);

console.log(doublyLinkedList);