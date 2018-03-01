'use strict';


class _Node {
    constructor(value, next) {
        this.value = value,
        this.next = next;
    }
} //end _Node class



class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(value) { 
        let newNode = new _Node(value, null); 
        newNode.next = this.head; 
        this.head = newNode; 
    }

    insertLast(value) {
        let newNode = new _Node(value, null);
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let prevNode = this.head;
        while((currNode.value !== value) && (currNode !== null)) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Value not found');
            return;
        }
        prevNode.next = currNode.next;

    }


} //end LinkedList class


function main() {
    let SSL = new LinkedList();

    SSL.insertFirst('David');
    SSL.insertFirst('Apollo');
    SSL.insertFirst('Boomer');
    SSL.insertLast('Tauhida');
    SSL.remove('Boomer');
    console.log(SSL);


}

main();