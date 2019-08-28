class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(newValue) {
        let node = new Node();
        node.value = newValue;
        if (this.head === null) {
            this.head = node;
            return;
        }

        if (this.head.next === null) {
            this.head.next = node;
            return;
        }
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }

        tempNode.next = node;

    }

}




function mergeLinkedLists(LL1, LL2) {
    let current1 = LL1.head;
    let current2 = LL2.head;
    let anchor = 0;
    if (LL1.head === null) {
        return LL2;
    } else if (LL2.head === null) {
        return LL1;
    } else {
        while (current2) {
            anchor = current1.next;
            current1.next = current2;
            current2 = current2.next;
            
            

        }
    }
    return LL1;
}


module.exports = {LinkedList, mergeLinkedLists};
