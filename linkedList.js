class Animal {
  constructor(data) {
    this.type = data;
    this.next = null;
  }

  setNextNode(node) {
    if(this.next === null || node instanceof Animal) {
        return this.next = node
    } else {
        throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next
  } 
}

const cat = new Animal('cats')
const dog = new Animal('dogs')
const bird = new Animal('birds')

cat.setNextNode(dog)
dog.setNextNode(bird)

console.log(cat)
