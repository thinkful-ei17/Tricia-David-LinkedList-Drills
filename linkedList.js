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
        while (current.value !== value) {
            if(current.next === null) {
                console.log('value not found');
                return null;
            } else {
                current = current.next;
            }
        }
        return current;
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

    insertAt(value, position) {
        let newNode = new _Node(value, null);
        let current = this.head;
        let prev = this.head;
        if (this.head === null) {
            console.log("list is empty cannot insertAfter");
            return
        }
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let i = 0
        while (i !== position) {
            prev = current;
            current = current.next;
            i++
        }
        prev.next = newNode;
        newNode.next = current;
    }

    makeCircular(findValue, toValue) {
        let currentNode = this.find(findValue);
        let toNode = this.find(toValue);
        currentNode.next = toNode;
    }


} //end LinkedList class

function displayLinkedList(linkedList) {
    let current = linkedList.head;
    if (linkedList.head === null) {
        console.log("list is empty");
        return;
    }
    while (current.next !== null) {
        console.log("current: ", current.value);
        console.log("next => ", current.next.value);
        current = current.next;
    }
}

function size(linkedList) {
    let size = 1;
    let current = linkedList.head;
    if (linkedList.head === null) {
        console.log("list is empty");
        return;
    }
    while (current.next !== null) {
        current = current.next;
        size++;
    }
    console.log('The total size of the linked list is', size);
    return size;
}

function isEmpty(linkedList) {
    if (linkedList.head === null) {
        return true;
    }
    return false;
}

function findPrevious(linkedList, value) {
    let current = linkedList.head;
    let previous = linkedList.head;
    if (linkedList.head === null)
        return;
    if (linkedList.head.value === value) {
        console.log("no previous item");
        return;
    }
    while ((current.value !== value) && (current.next !== null)) {
        previous = current;
        current = current.next;
    }
    return previous.value;
}

function findLast(linkedList) {
    let current = linkedList.head;
    if (linkedList.head === null)
        return;
    while (current.next !== null) {
        current = current.next;
    }
    return current.value;
}


// function reverseList(linkedList) {
//     console.log('enter reverseList')

//     let current = linkedList.head;
//     if (linkedList.head === null) {
//         console.log('list is empty cannot reverse')
//         return
//     }
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             newNode = newNode.next;
//             if (current === linkedList.head) {
//                 newNode.next = current;
//                 current.next = null;
//                 current = newNode;
//             } else {
//                 newNode.next = current;
//                 current = newNode;
//             }
//         }
//         // current.next = current;
//         linkedList.head = newNode
//         current = null;
//     }
//     displayLinkedList(linkedList);
// }

function reverseList(list) {
    let current = list.head;
    let previous = null;
    let next = null;
    
    if(list.head===null) {
      console.log('list is empty');
      return;
    }
    
    while(current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    list.head = previous;
    return list;
}


function middle(list) {
    let position = Math.floor(size(list)/2);
    let current = list.head;
    let i = 0;
    while (i !== position) {
        console.log(position, i);
        current = current.next;
        i++;
    }
    return current;
}


function isCycle(list) {
    let pointer1 = list.head;
    let pointer2 = list.head;
    if(list.head===null) {
      console.log('list is empty');
    }
    
    while(pointer1.next !== null) {
      pointer1 = pointer1.next;
      if(pointer2.next.next !== null) {
        pointer2 = pointer2.next.next;
      } else {
        return false;
      }
      if(pointer1 === pointer2) {
        return true;
      }
    }
    return false;
  }





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
    SSL.insertAt('Jack', 1);
    // console.log(SSL)

    // displayLinkedList(SSL);
    // size(SSL);
    // console.log(findPrevious(SSL, 'David'));
    // console.log(findLast(SSL));
    // console.log(reverseList(SSL));
    // console.log(middle(SSL));
    let CL = new LinkedList();
    CL.insertFirst('Fourth');
    CL.insertFirst('Third');
    CL.insertFirst('Second');
    CL.insertFirst('First');
    console.log(CL);
    CL.makeCircular('Fourth', 'Second');
    console.log(CL);
    console.log(isCycle(CL));
    console.log(isCycle(SSL));

}

main();