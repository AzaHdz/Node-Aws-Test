const net = require("net");

const server = net.createServer(socket => {
  socket.write("Hello new client.");
  console.log("client connected");
  socket.on("data", data => {
    console.log(data.toString());
    socket.write("Data recieved");
  })
})

server.listen(3000);
