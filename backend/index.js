const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const socketIo = require('socket.io')(http, {
  cors: {
    origin: "http://10.0.2.2:3000/"
  },
});

const PORT = 4000;

let chatgroups = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

socketIo.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);

  socket.on("getAllGroups", () => {
    socket.emit("groupList", chatgroups)
  })

  socket.on("createNewGroup", (currentGroupName)=> {
    console.log(currentGroupName)
    chatgroups.unshift({id: chatgroups.length + 1, currentGroupName, messages: []});
  })
  socket.emit("groupList", chatgroups)
});

app.get('/api', (req, res) => {
  res.json(chatgroups);
});


http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});