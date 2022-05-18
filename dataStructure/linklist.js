class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    let p = this.head;
    if (this.head) {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      this.head = node;
    }
    this.length++;
  }
  print() {
    let p = this.head;
    let res = '';
    if (this.head) {
      do {
        res += p.val + '=>';
        p = p.next
      } while (p.next);
      res += p.val;
      console.log(res)
    } else {
      console.log("empty")
    }
  }
}

let linkList = new LinkNodeList();

linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
linkList.append(5);
linkList.print();
