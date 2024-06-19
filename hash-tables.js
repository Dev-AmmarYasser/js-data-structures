class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  // Avg => o(1) , Big-O = o (n) because we used array.find
  set(key, value) {
    // this.table[this.hash(key)] = value;
    const index = this.hash(key);

    // return this.table;
    const bucket = this.table[this.hash(key)];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  // Avg => o(1) , Big-O = o (n) because we used array.find
  get(key) {
    // return this.table[this.hash(key)];
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  // Avg => o(1) , Big-O = o (n) because we used array.find
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    // let str = "";
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

console.log(table.hash("Ammar"));
console.log(table.set("Ammar", 88));
console.log(table.set("Ammar", 99));
console.log(table.set("mAmar", 89));
table.display();
console.log(table.get("Ammar"));
table.remove("Ammar");
table.display();
