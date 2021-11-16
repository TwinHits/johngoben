import { prototype } from "vue/types/umd";

export class CircularLinkedList {

    root: LinkedListNode;

    constructor(items: any[]) {
        // Constructor has special permission to briefly create an invalid node
        this.root = new LinkedListNode(items[0], undefined as unknown as LinkedListNode, undefined as unknown as LinkedListNode);
        this.root.last = this.root;
        this.root.next = this.root;

        let ptr = this.root;
        for (let i = 1; i < items.length; i++) {
            ptr = new LinkedListNode(items[i], ptr, this.root)
            ptr.last.next = ptr;
            this.root.last = ptr;
        }
    }

    seek(item: any): LinkedListNode | undefined {
        let ptr = this.root.next;
        while (ptr.data !== item) {
            ptr = ptr.next;
            if (ptr === this.root) {
                return undefined;
            }
        }
        return ptr;
    }

}

export class LinkedListNode {
    constructor(item: any, last: LinkedListNode, next: LinkedListNode) {
        this.data = item;
        this.last = last;
        this.next = next;
    }

    data: any;
    last: LinkedListNode;
    next: LinkedListNode;
}