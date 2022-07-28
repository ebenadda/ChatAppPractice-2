const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");

const socket = io();
//message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  //Scroll Down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Get message text
  const msg = e.target.elements.msg.value;

  //Emit messge ot server
  socket.emit("chatMessage", msg);

  //console.log(msg);
});

//output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = ` <p class="meta">Neten <span>4:50pm</span></p>
  <p class="text">${message}</p>`;
  document.querySelector(".chat-messages").appendChild(div);
}
