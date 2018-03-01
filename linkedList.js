'use strict';


class _Node {
    constructor(value, next) {
        this.value = value,
            this.next = next
    }
} //end _Node class



class LinkedList {
    constructor() {
        this.head = null
    }


    insertFirst(value) {
        console.log('enter insertFirst');
        let newNode = new _Node(value, null);
        this.head = newNode;
        newNode.next = this.next;
    }






} //end LinkedList class


function main() {
    let SSL = new LinkedList();

    SSL.insertFirst('David');
    console.log(SSL);


}

main();