const chatForm = document.getElementById("chat-Form");

const socket = io();
socket.on("message", (message) => {
  console.log(message);
});

//message submit
