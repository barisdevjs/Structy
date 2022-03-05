class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
}
}

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y

// solution 1

/* const linkedList = (head) => {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
} */

// solution 2

const linkedList = (head) => {
    const result = [];
    fillArray(head, result);
    return result;
}

const fillArray = (head, result) => {
    if (head) {
        result.push(head.val);
        fillArray(head.next, result);
    }
}


console.log(linkedList(x));