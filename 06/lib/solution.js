function loop(count, callback) {
  if (count > 0) {
    callback();
    count --;
    loop(count, callback);
  }
}

function test(){
  console.log('hi');
}

loop(5,test);