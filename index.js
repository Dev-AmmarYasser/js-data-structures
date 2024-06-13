const arr = [1, 2, 3, "Ammar"];

arr.push(4); // Add to the end
arr.pop(); // Remove from the end
arr.unshift(0); // Add to the start
arr.shift(); // Remove from the start

// for (const item of arr) {
//   console.log(item);
// }

// ====

const obj = {
  name: "Ammar",
  age: 16,
  good: true,
};

// console.log(obj["age"]);

delete obj.name;

// console.log(obj);

// console.log("-".repeat(40));

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// ======

const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); // No duplication

// for (const item of set) {
//   console.log(item);
// }

// console.log(set.has(4));

// console.log("-".repeat(40));

set.delete(4);

// console.log(set.has(4));

// console.log(set.size);

set.clear();

// for (const item of set) {
//   console.log(item);
// }

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3); // Add New Elements

// console.log(map.has("a")); // Check if present

map.delete("c");

// console.log(map.size);

map.clear();

// for (const [key, value] of map) {
// console.log(`${key}: ${value}`);
// }

// Stack implementation

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "No Elements to return";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printItems() {
    return this.items;
  }
}

let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// // console.log(Stack.this.items);
// console.log(stack.pop()); // Output: 30
// console.log(stack.peek());
// console.log(stack.printItems());

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   Enqueue(element) {
//     this.items.push(element);
//   }
//   Dequeue() {
//     if (this.items.length == 0) {
//       return "Underflow";
//     }
//     return this.items.shift();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "No Elements to return";
//     }
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   printItems() {
//     return this.items.toString();
//   }
// }

// const queue = new Queue();

// console.log(queue.printItems());

// queue.Enqueue(1);

// queue.Enqueue(2);

// queue.Enqueue(3);

// queue.Enqueue(4);

// console.log(queue.printItems());

// queue.Dequeue();

// console.log(queue.printItems());

// queue.Enqueue(10);
// queue.Enqueue(20);
// queue.Enqueue(30);

// console.log(queue.Dequeue()); // Output: 10
// console.log(queue.peek()); // Output: 20

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];

    if (this.isEmpty()) {
      console.log("Underflow");
      return null;
    }
    delete this.items[this.front];
    this.front++;

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    }

    return item;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    console.log(this.items);
  }

  isEmpty() {
    return (this.rear = this.front);
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);

// queue.enqueue(7);

queue.print();

console.log(queue.peek());

console.log(queue.size());

queue.print();
