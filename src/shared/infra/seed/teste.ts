import { PrismaClient } from "@prisma/client";
import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

async function socketServer() {
  const repository = new PrismaClient().message;

  const messages = await repository.findMany();
  console.log(messages);

  io.on("connection", (socket: Socket) => {
    console.log("Um cliente se conectou");

    socket.emit("dadosIniciais", messages);

    socket.on("disconnect", () => {
      console.log("Um cliente se desconectou");
    });
  });
}

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

socketServer();
