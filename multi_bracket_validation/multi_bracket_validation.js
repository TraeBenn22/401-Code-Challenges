'use strict';

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }

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
        this.length++;
        this.top = newest;
      }
    }
  
    pop(){
      let record = this.top;
      this.top = this.top.next;
      record.next = null;
      this.length --;
      return record;
    }
}



function multiBracketCheck(str) {
    const stack1 = new Stack();
    const stack2 = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || '[' || '{') {
            stack1.push(str[i]);
        }
        if (str[i] === ')' || ']' || '}') {
            stack2.push(str[i]);
        }

    }
   return checkingStacksWithBrackets(stack1, stack2);
}





function checkingStacksWithBrackets(stack1, stack2) {
    if (stack1.length === stack2.length) {
        for (let i = 0; i < stack1.length; i++) {
            if (stack1[i] === '(' && stack2[i] === ')') {
                return true;
            } else {
            } if (stack1[i] === '{' && stack2[i] === '}') {
                return true;
            } if (stack1[i] === '[' && stack2[i] === ']') {
                return true;
            }
        }
    }
    else {
        return false;
    }
};


module.exports = {checkingStacksWithBrackets, multiBracketCheck};