// socket.ts
import { Message } from "@prisma/client";
import { createServer } from "http";
import { Server } from "socket.io";

import { app } from "@shared/infra/http/app";

export const httpServer = createServer(app);
export const io = new Server(httpServer);

export async function socket(messages: Message[]): Promise<void> {
  console.log("entrou");

  io.on("connection", (socket) => {
    console.log("A customer has connected!");

    io.emit("sendMessages", messages);

    socket.on("disconnect", () => {
      console.log("A customer has disconnected");
    });
  });
}
