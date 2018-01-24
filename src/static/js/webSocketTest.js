// socket connectiom
var socket = io.connect('http://' + document.domain + ':' + location.port);

console.log('this is a test');
function test() {
  //socket.emit('a', targetUrl, clientRandomString);
}

function sendData() {
  console.log('sending data');
  let data = $('#data').val();
  socket.emit('data', data);
}

// waits for imgUrl event
/*
socket.on('imgUrl', function(test) {
  if (test.cRS == clientRandomString){
  }
})
*/

socket.emit('connect');

socket.on('connect', function() {
  console.log('client connected to socket');
})
