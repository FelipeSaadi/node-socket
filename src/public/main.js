const socket = io()
let username = ''
let userList = []

let loginPage = document.querySelector("#login-page")
let chatPage = document.querySelector("#chat-page")

let nameInput = document.querySelector("#name-input")
let chatInput = document.querySelector("#chat-input")

loginPage.style.display = 'flex'
chatPage.style.display = 'none'

nameInput.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    let name = nameInput.value.trim()

    if(name != '') {
      username = name
      document.title = 'Chat ('+ username + ')'

      loginPage.style.display = 'none'
      chatPage.style.display = 'flex'
    }
  }
})