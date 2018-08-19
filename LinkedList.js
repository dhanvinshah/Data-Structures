class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyList {
    constructor() {
        this._length = 0;
        this.head = null;
    }

    addToHead(value) {
        const node = new Node(value);
        let currentNode = this.head;
        if(!currentNode) {
            this.head = node;
            this._length++;
            return node;
        }
        else {
            node.next = currentNode;
            this.head = node;
            this._length++;
            return node;
        }
    }

    addToEnd(value) {
        const node = new Node(value);
        let currentNode = this.head;
        if(!currentNode) {
            this.head = node;
            this._length++;
            return node;
        }
    
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
    
        currentNode.next = node;
        this._length++;
    
        return node;
    }

    searchNode(value) {
        let currentNode = this.head;

        while(currentNode) {
            if(currentNode.data === value) return currentNode;
            else currentNode = currentNode.next;
        }

        return null;
    }

    deleteNode(value) {
        if(this.head.data === value) {
            this.head = this.head.next;
        }
        else {
            let previousNode = this.head;
            let currentNode = this.head.next;

            while(currentNode) {
                if(currentNode.data === value) {
                    previousNode.next = currentNode.next;
                    this._length--;
                    break;
                }
                else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
        }

        return null;
    }

  
}

var singlyList = new SinglyList();
singlyList.addToEnd(100);
singlyList.addToEnd(200);
singlyList.addToEnd(300);
singlyList.addToEnd(400);
singlyList.addToEnd(500);


let nodeFound = singlyList.searchNode(300);
console.log(nodeFound);

singlyList.deleteNode(300);

console.log(singlyList);


