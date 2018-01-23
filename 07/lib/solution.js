'use strict';

function link(sll) {
  let itr1 = this.head;
  let itr2 = this.head.next;
  let circular;
  while(itr2.next) {
    if (itr1 === itr2) {
      circular = true;
      break;
    }
    itr1 = itr1.next;
    itr2 = itr2.next.next;
  }
  if (!itr2.next) {
    return false;
  }
  return true;
}