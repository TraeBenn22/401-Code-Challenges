'use strict';

class Stack {
    constructor(){
      this.top = null;
      this.length = 0;
    }
  
    push(value){
      if(this.top === null){
        this.top = new Node(value);
      } else {
        let newest = new Node(value);
        newest.next = this.top;
        this.top = newest;
      }
      this.length++;
    }
  
    pop(){
      let record = this.top;
      this.top = this.top.next;
      record.next = null;
      this.length--;
      return record;
    }

}

class Queue {
    constructor(){
      this.front = null;
      this.back = null;
    }
  
    enqueue(value){
      let newest = new Node(value);
      if(!this.front){
        this.front = newest;
        this.back = newest;
      } else {
        this.back.next = newest;
        this.back = newest;
      }
      
    }
  
    dequeue(){
      let returned = this.front;
      this.front = this.front.next;
      returned.next = null;
      return returned.value;
    }
};

class Psuedoqueue {
    constructor() {
        this.stackB = new Stack();
        this.stackA = new Stack();
    }

    enqueue(value) {
        if(this.stackB.length === 0) {
            this.stackB.push(value);
        } else{
            while(this.stackB.length > 0) {
                this.stackA.push(stackB.pop())
            }
            this.stackA.push(value);
        }
        while(this.stackB.length < this.stackA.length) {
            this.stackB.push(stackA.pop())
        }
    }
    
    dequeue() {
        if(this.stackB.length !== 0) {
            this.stackB.pop();
        }
    }
}