const header_username = document.getElementById("dashboard-header-username")
const username = document.getElementById("dashboard-card-username")
const email = document.getElementById("dashboard-card-email")
const logout_button = document.getElementById("logout-button")

const users = JSON.parse(localStorage.getItem("users"))
const currentuser = localStorage.getItem("currentuser")

header_username.textContent = users[currentuser].username
username.textContent = users[currentuser].username
email.textContent = currentuser

logout_button.addEventListener("click",()=>{
    localStorage.setItem("currentuser",null)
    window.location.href = "login.html"
})