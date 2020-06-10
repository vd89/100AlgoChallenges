/** @format */

class Node {
	constructor(prev, value, next) {
		this.prev = prev;
		this.value = value;
		this.next = next;
	}
}
class DoubleyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	// Insertion to head and tail
	addToHead(value) {
		let newNode = new Node(null, value, this.head);
		if (this.head) {
			this.head.prev = newNode;
		} else {
			this.tail = newNode;
		}
		this.head = newNode;
	}
	addToTail(value) {
		let newNode = new Node(this.tail, value, null);
		if (this.tail) {
			this.tail.next = newNode;
		} else {
			this.head = newNode;
		}
		this.tail = newNode;
	}

	// Deletion to head and tail
	deleteAtHead() {
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
			return toReturn;
		}
	}
	deleteAtTail() {
		let toReturn = null;
		if (this.tail !== null) {
			toReturn = this.tail.data;
			if (this.tail === this.head) {
				this.head = null;
				this.tail = null;
			} else {
				this.tail = this.tail.next;
				this.tail.prev = null;
			}
			return toReturn;
		}
	}
}

const ll = new DoubleyLinkedList();
ll.addToHead(11);
ll.addToHead(12);
ll.addToTail(15);
console.log(ll);
