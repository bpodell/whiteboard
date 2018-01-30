'use strict';

const Stack = require('./stack.js')

module.exports = class {
    constructor(maxSize=1048) {
      this.stack1 = new Stack
      this.stack2 = new Stack
    }
  
    enqueue(val){
        this.stack1.push(val)
     }
  
    dequeue(){
        if (this.stack2.size === 0) {
            console.log(this.stack2)
            while(this.stack1.size > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        // if (this.stack2.size !== null) {
        //     this.stack2.pop();
        // }
        return this.stack2.pop()
    }
  };
