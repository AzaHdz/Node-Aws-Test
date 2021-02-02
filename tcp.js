const net = require("net");

const server = net.createServer(socket => {
  socket.write("Hello new client.");
  console.log("client connected");
  socket.on("data", data => {
    console.log(data.toString());
  })
})

server.listen(3000);
