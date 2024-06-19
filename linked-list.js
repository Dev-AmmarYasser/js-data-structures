class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Big-O = O(1)
  // prepend(value) {
  //   const node = new Node(value);
  //   if (this.isEmpty()) {
  //     this.head = node;
  //   } else {
  //     node.next = this.head;
  //     this.head = node;
  //   }
  //   this.size++;
  // }

  // Big-O = O(1)
  prependTail(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // -------------------------------------

  // Big-O = O(n)
  // append(value) {
  //   const node = new Node(value);

  //   if (this.isEmpty()) {
  //     this.head = node;
  //   } else {
  //     let prev = this.head;
  //     while (prev.next) {
  //       prev = prev.next;
  //     }
  //     prev.next = node;
  //   }
  //   this.size++;
  // }

  // append method with tail implementation
  appendTail(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index > this.size || index < 0) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // removeFrom(index) {
  //   if (index >= this.size || index < 0) return null;
  //   let removedNode;
  //   if (index === 0) {
  //     removedNode = this.head;
  //     this.head = this.head.next;
  //   } else {
  //     let prev = this.head;
  //     for (let i = 0; i < index - 1; i++) {
  //       prev = prev.next;
  //     }
  //     removedNode = prev.next;
  //     prev.next = removedNode.next;
  //   }
  //   this.size--;
  //   return removedNode.value;
  // }

  removeFromFront() {
    if (this.isEmpty()) {
      return "Underflow...";
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      // this.tail = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  // removeValue(value) {
  //   if (this.isEmpty()) {
  //     return null;
  //   }
  //   if (this.head.value === value) {
  //     this.head = this.head.next;
  //     this.size--;
  //     return value;
  //   } else {
  //     let prev = this.head;
  //     let removedNode;
  //     while (prev.next && prev.next.value !== value) {
  //       prev = prev.next;
  //     }
  //     if (prev.next) {
  //       removedNode = prev.next;
  //       prev.next = removedNode.next;
  //       this.size--;
  //       return value;
  //     }
  //     return null;
  //   }
  // }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.value === value) {
        return index;
      }
      index++;

      curr = curr.next;
    }
    return -1;
  }

  // reverse() {
  //   let prev = null;
  //   let curr = this.head;
  //   while (curr) {
  //     let next = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = next;
  //   }
  //   this.head = prev;
  // }

  print() {
    if (this.isEmpty()) {
      console.log("The List is Empty...");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

module.exports = LinkedList;

// list.insert(10, 0);
// list.print();

// list.insert(20, 0);
// list.print();

// list.insert(30, 1);
// list.print();

// list.insert(40, 2);
// list.print();

// console.log(list.getSize());

// console.log(list.removeFrom(10));

// console.log(list.removeFrom(0));

// list.print();

// console.log(list.removeFrom(1));

// list.print();

// console.log(list.getSize());

// console.log(list.removeValue(30));

// list.appendTail(0);
// list.appendTail(1);
// list.appendTail(2);

// list.print();

// // console.log(list.getSize());

// console.log("-".repeat(50));

// // console.log(list.search(200));

// // list.reverse();

// // list.print();

// // console.log(list.removeFromFront());

// // list.print();

// console.log(list.removeFromEnd());

// list.print();
