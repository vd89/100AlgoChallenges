/** @format */

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class SingleLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	isEmpty() {
		return this.size == 0;
	}

	//Insertion
	addToHead(value) {
		let newNode = new Node(value);
		if (this.head == null) {
			this.head = newNode;
		} else {
			let temp = this.head;
			this.head = newNode;
			this.head.next = temp;
		}
		this.size++;
		this.head;
	}
	// Deletion of Value

	remove(value) {
		let currentHead = this.head;
		if (currentHead.data == value) {
			this.head = currentHead.next;
		} else {
			let pre = currentHead;
			while (currentHead.next) {
				if ((currentHead.data = value)) {
					pre.next = currentHead.next;
					pre = currentHead;
					currentHead = currentHead.next;
					break;
				}
				pre = currentHead;
				currentHead = currentHead.next;
			}
			if (currentHead.data == value) {
				pre.next = null;
			}
			this.size--;
		}
	}

	//Deletion of Head

	removeAtHead() {
		let toReturn = null;
		if (this.head !== null) {
			toReturn = this.head.data;
			if (this.tail === this.head) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
		}
		this.size--;
		return toReturn;
	}

	//Searching
	find(value) {
		let currentHead = this.head;
		while (currentHead.next) {
			if (currentHead.data == value) {
				return true;
			}
			currentHead = currentHead.next;
		}
		return false;
	}
}

const singly = new SingleLinkedList();
singly.addToHead(1);
singly.addToHead(11);
singly.addToHead(12);
singly.addToHead(20);

// singly.remove(11);
// singl.remove(20);

// singl.removeAtHead();

singly.find(11);

console.log(singly);
