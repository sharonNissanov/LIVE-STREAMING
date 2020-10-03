const io = require('socket.io-client');
export const socket = io('https://wss.live-rates.com/')

//Use the 'trial' as key to establish a 2-minute streaming connection with real-time data.
//After the 2-minute test, the server will drop the connection and block the IP for an Hour.

var key = '696a1d4ba3' 
//var key = 'XXXXXXX' //YOUR LIVE-RATES SUBSCRIPTION KEY

socket.on('connect', function() {
  console.log("connect to socket io")
  // if you want to subscribe only specific instruments, emit instruments. To receive all instruments, comment the line below.
  var instruments = ['EURUSD', 'USDJPY', 'BTCUSD', 'ETH']
 // socket.emit('instruments', instruments);
  
  socket.emit('key', key); 
});

export default socket;
