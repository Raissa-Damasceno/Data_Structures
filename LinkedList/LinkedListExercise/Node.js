class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (this.next === null || node instanceof Node) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class");
    }
  }

  getNextNode() {
    return this.next
  }
}

module.exports = Node;