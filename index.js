let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname  + '/index.html');
});


http.listen(3000, () => {
  console.log('listening on *:3000, Conntetd done');
});


io.on('connection',(socket)=>{
  console.log('there is a connetion!');
  socket.on('disconnect', ()=>{
    console.log('user disconnnnnnnnect!');
  })
})