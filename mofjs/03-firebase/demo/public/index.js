var ui
var currentUser

var uiConfig = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID, {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: 'ID'
    }
  ]
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    ui = new firebaseui.auth.AuthUI(firebase.auth());
    firebase.auth().onAuthStateChanged((user) => {
      currentUser = user
      if (user) {
        showChat(user);
        subscribeChat();
      } else {
        unsubscribeChat();
        showAuth();
      }
    })
  } catch (e) {
    console.error(e);
  }
});

function replaceEl(el) {
  const app = document.getElementById("app")
  app.replaceChild(el, app.firstElementChild)
}

function showAuth() {
  const authContainer = document.createElement("div")
  authContainer.id = "auth"
  replaceEl(authContainer)
  ui.start("#auth", uiConfig)
}

function showChat(user) {
  const chatContainer = document.createElement("div")
  chatContainer.id = "chat"
  chatContainer.innerHTML = `
    <div class="card">
      <div class="card-header">Chat <button type="button" onClick="doLogout()" class="btn btn-outline-secondary float-right">X</button></div>
      <div class="card-body" id="chat-box">
      </div>
      <div class="card-footer bg-transparent">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">${user.displayName}</span>
          </div>
          <input type="text" id="message" class="form-control">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" onClick="sendMessage()">Kirim</button>
          </div>
        </div>
      </div>
    </div>`
  replaceEl(chatContainer)
}

function doLogout() {
  firebase.auth().signOut()
}

function sendMessage() {
  const message = document.getElementById("message").value
  if(message.length > 1) {
    currentUser.getIdToken().then(token => {
      fetch("/api/chat", {
        method: "post",
        headers: new Headers({"Authorization": "Bearer " + token, "Content-Type": "application/json", }),
        body: JSON.stringify({ message })
      }).then(() => {
        document.getElementById("message").value = ""
      })
    })
  }
}

function appendChat(chatId, username, avatar, message, time) {
  const newChat = document.createElement("div")
  newChat.id = chatId
  newChat.className = "card my-3 p-2"
  newChat.innerHTML = `
  <div class="media">
    <img src="${avatar||"/avatar.png"}" class="mr-3 avatar" alt="user-avatar">
    <div class="media-body">
      <h5 class="mt-0">${username}</h5>
      <p>${message}</p>
      <small>${(new Date(time)).toLocaleDateString('id', {year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric"})}</small>
    </div>
  </div>`
  document.getElementById("chat-box").appendChild(newChat)
}

function removeChat(chatId) {
  const chat = document.getElementById(chatId)
  document.getElementById("chat-box").removeChild(chat)
}

function subscribeChat() {
  const chatsDB = firebase.database().ref("chats")
  chatsDB.on("child_added", (data) => {
    const { username, avatar, message, time } = data.val()
    appendChat(data.key, username, avatar, message, time)
  })
  chatsDB.on("child_removed", (data) => {
    removeChat(data.key)
  })
}

function unsubscribeChat() {
  firebase.database().ref("chats").off()
}