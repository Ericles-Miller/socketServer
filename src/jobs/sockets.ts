// sockets.ts
import { createServer } from "http"; // Adicione esta linha para importar createServer
import { Server } from "socket.io";

import { app } from "@shared/infra/http/app";

const server = createServer(app); // Use createServer em vez de http.createServer
export const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A customer has connected!");

  socket.on("disconnect", () => {
    console.log("A customer has disconnected");
  });
});
