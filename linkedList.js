'use strict';


class _Node {
    constructor(value, next) {
        this.value = value,
            this.next = next;
    }
} //end _Node class



class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        let newNode = new _Node(value, null);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertLast(value) {
        let newNode = new _Node(value, null);
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let prevNode = this.head;
        while ((currNode.value !== value) && (currNode !== null)) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Value not found');
            return;
        }
        prevNode.next = currNode.next;

    }

    find(value) {
        console.log('enter find');
        //is the list empty
        if (this.head === null)
            return;

        let current = this.head;
        //loop to find value
        while ((current.value !== value) && (current.next !== null)) {
            console.log(current.value);
            current = current.next;
        }
        if (current.next === null) {
            console.log('value not found');
            return;
        }
        return current.value;
    }

    insertBefore(insertValue, findValue) {
        let newNode = new _Node(insertValue, null);
        let current = this.head;
        let previous = this.head;
        if (this.head === null)
            return;
        if (this.head.value === findValue) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        while ((current.value !== findValue) && (current.next !== null)) {
            previous = current;
            current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
    }

    insertAfter(insertValue, findValue) {
        let newNode = new _Node(insertValue, null);
        let current = this.head;
        let previous = this.head;
        if (this.head === null) {
            console.log("list is empty cannot insertAfter");
            return
        }
        if (this.head.value === findValue) {
            newNode.next = this.head.next;
            this.head.next = newNode;
            return
        }
        while ((current.value !== findValue) && (current.next !== null)) {
            previous = current;
            current = current.next
        }
        newNode.next = current.next;
        current.next = newNode;
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
    SSL.insertBefore('Tricia', 'David');
    console.log(SSL);
    // console.log('We found:  ', SSL.find('Apollo'));
    // console.log('We found:  ', SSL.find('David'));
    // console.log('We found:  ', SSL.find('Tricia'));

    SSL.insertAfter('Sam', 'Apollo')
    console.log(SSL);


}

main();