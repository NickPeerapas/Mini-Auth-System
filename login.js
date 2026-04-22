const email = document.getElementById("login-email")
const password = document.getElementById("login-password")
const form= document.getElementById("login-form")
const error_message = document.getElementById("login-error-message")
mydata = {"peerapasi87@gmail.com":{"password":"12345678"}}
localStorage.setItem("users",JSON.stringify(mydata))

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    login()
})

function search_user_by_email(email){
    let rawdata = localStorage.getItem("users")
    if (rawdata == null) return null
    let data = JSON.parse(rawdata)
    return email in data ? data[email] : null
}

function login(){
    const myemail = email.value.trim()
    const mypassword = password.value.trim()
    const account = search_user_by_email(myemail)
    let invalid = false

    if(! myemail.includes("@") || myemail == ""){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Email Invalid"
        return
    }

    if (mypassword.length < 8 || mypassword == ""){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Password must be at least 8 characters"
        return
    }

    if(!account){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Account Not Found"
        return
    }

    if(account.password != mypassword){
        invalid = true
        error_message.classList.add("wrong")
        error_message.textContent = "Password Not Correct"
        return
    }

    if(!invalid){
        error_message.classList.remove("wrong")
    }
}