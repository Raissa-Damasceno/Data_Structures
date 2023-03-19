const Node = require("./node.js");

class Connection {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    if(currentHead) {
        this.head.setNextNode(currentHead)
    }
  }

  addToTail(tail) {}

  removeHead() {}

  printList() {}
}

const spAirport = new Connection()
const rjAirport = new Connection()

spAirport.addToHead('São Paulo Airport')
rjAirport.addToHead('Rio de Janeiro Airport')


console.log(spAirport)
console.log(rjAirport)
