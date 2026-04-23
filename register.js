const usernameEl = document.getElementById("register-username")
const emailEl = document.getElementById("register-email")
const passwordEl = document.getElementById("register-password")
const confirmpasswordEl = document.getElementById("register-confirmpassword")
const form = document.getElementById("register-form")
const error_message = document.getElementById("register-error-message")


function getusers(){
    const rawdata = localStorage.getItem("users")
    if (rawdata == null) return false
    const data = JSON.parse(rawdata)
    return data
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const username = usernameEl.value.trim()
    const email = emailEl.value.trim()
    const password = passwordEl.value.trim()
    const confirmpassword = confirmpasswordEl.value.trim()
    let invalid = false

    if(username == ""){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Invalid Username"
        return
    }
    if(email == "" || !email.includes("@")){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Invalid Email"
        return
    }
    if(password == ""){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Invalid Password"
        return
    }
    if(password.length < 8){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Password must be at least 8 characters"
        return
    }
    if(confirmpassword == ""){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Invalid Confirm Password"
        return
    }
    if(confirmpassword != password){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Password do not match"
        return
    }

    if(!invalid){
        error_message.classList.remove("wrong")
        error_message.classList.add("success")
        error_message.textContent = "Registration Successful"
    }
    let users = getusers()
    if(!users){
       users = {[email]:{username:username,password:password}}
    }
    else{
        if(users[email]){
            error_message.classList.add("wrong")
            error_message.textContent = "This email address has already been used"
            return
        }else{
            users[email] = {username:username,password:password}
        }
    }
    localStorage.setItem("users",JSON.stringify(users))
})