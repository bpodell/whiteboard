'use strict';

const Queue = require('../lib/solution');

describe('queue data structure module', function() {
  let q = new Queue;

  it('after 3 additions stack 1 should have 3 nodes and stack 2 should have none', () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.stack1.size).toEqual(3);
    expect(q.stack2.size).toEqual(0);
  });
  it('should switch the stacks after a dequeue and remove the first node entered', () => {
    q.dequeue();
    expect(q.stack1.size).toEqual(0);
    expect(q.stack2.size).toEqual(2);
  });
  it('dequeue should return the value of the next object to be removed', () => {
    expect(q.dequeue()).toEqual({val: 2, next: null});
  });

});