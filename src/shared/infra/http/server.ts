import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";

import { app } from "./app";

const httpServer = createServer(app);
const socketIOServer = new SocketIOServer(httpServer);

socketIOServer.on("connection", (socket) => {
  console.log("A customer has connected!");

  socket.on("disconnect", () => {
    console.log("A customer has disconnected");
  });
});

const PORT = process.env.PORT || 3333;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
