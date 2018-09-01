class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new BinaryTreeNode(10);
const left = new BinaryTreeNode(20);
const right = new BinaryTreeNode(30);

root.left = left;
root.right = right;