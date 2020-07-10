//Objective is to reverse the nodes in every subsequent 'k'-size group

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)

k = 2


//O(n) solution that stores the nodes in a stack and pushes them out in
//reverse order afterwards

let stack = []
let newNode = new ListNode(-1)
newNode.next = head
let temp = newNode
    
while (head) {
    //Move head and add all values into stack to be reversed
    for (let i = 0; i < k && head; i++) {
        stack.push(head)
        head = head.next
    }
        
    //Make sure the remaining number of elements to be reversed is
    //not less than k
    if (stack.length == k) {
        while (stack.length > 0) {
            temp.next = stack.pop()
            temp = temp.next
        }
        //Move to next set of nodes to be reversed
        temp.next = head
    }
}
    
return newNode.next