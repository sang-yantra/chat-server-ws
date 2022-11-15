import express from "express";
import cors from "cors";
import http from "http";
import { WebSocketServer } from "ws";
import { randomChat } from "./src/utils/chat.js";
const app = express();
app.use(express.static("public"));
app.use(express.json({ extended: false }));
app.use(express.urlencoded());
app.use(
  cors({
    origin: ["https://chat-server-ms.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const routes = express.Router();
routes.get("/", function (req, res) {
  res.send("Welcome to chat server");
});
app.use("/static", express.static("public"));
app.use("/", routes);

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const wss = new WebSocketServer({ server: server, path: "/chat" });

wss.on("connection", function connection(ws) {
  console.log("a user connected");
  emitMessages(ws);
  ws.on("message", function message(data) {
    console.log("received: %s", data);
    ws.send("received: " + data);
  });

  ws.on("close", function close() {
    console.log("disconnected");
  });

  ws.send("something");
});
function emitMessages(socket) {
  setInterval(() => {
    socket.send(JSON.stringify(randomChat()));
  }, 2000);
}

server.listen(PORT, () => console.log(`listening on port: ${PORT}`));
