function checkLogin(){
    var account = document.getElementById("4").value
    var accountWarning = document.getElementById("4")
    var password = document.getElementById("5").value
    var passwordWarning = document.getElementById("5")

    if(account.match(/[a-zA-Z]{1}\d{4}/)&&password.match(/[a-zA-Z]{1}\d{4}/)){
        location.href='javaClass2.html'
    }
    if(account.match(/[a-zA-Z]{1}\d{4}/)===null){
        accountWarning.style.borderColor = "red"
        document.getElementById("loginAc").innerHTML = "Account Error"
    }
    if(account.match(/[a-zA-Z]{1}\d{4}/)!==null){
        accountWarning.style.borderColor=""
        document.getElementById("loginAc").innerHTML=""
    }
    if(password.match(/[a-zA-Z]{1}\d{4}/)===null){
        passwordWarning.style.borderColor = "red"
        document.getElementById("LoginPw").innerHTML = "Password Error"
    }
    if(password.match(/[a-zA-Z]{1}\d{4}/)!==null){
        passwordWarning.style.borderColor=""
        document.getElementById("LoginPw").innerHTML=""
    }
}