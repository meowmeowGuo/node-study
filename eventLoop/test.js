console.log('script start');

process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B() {console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0);

console.log('script end');


