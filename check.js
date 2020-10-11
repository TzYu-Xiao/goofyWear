function check(){
    var account = document.getElementById("1").value
    var accountWarning = document.getElementById("1")
    var password = document.getElementById("2").value
    var passwordWarning = document.getElementById("2")
    var em = document.getElementById("3").value
    var emWarning = document.getElementById("3")

    if(account.match(/[a-zA-Z]{1}\d{4}/)&&password.match(/[a-zA-Z]{1}\d{4}/)&&em.match(/.@./)){
        location.href='javaClass2.html'
    }
    if(account.match(/[a-zA-Z]{1}\d{4}/)===null){
        accountWarning.style.borderColor = "red"
        document.getElementById("acWarning").innerHTML = "The account should contain at least 1 charaters and 4 numbers"
    }
    if(account.match(/[a-zA-Z]{1}\d{4}/)!==null){
        accountWarning.style.borderColor=""
        document.getElementById("acWarning").innerHTML=""
    }
    if(password.match(/[a-zA-Z]{1}\d{4}/)===null){
        passwordWarning.style.borderColor = "red"
        document.getElementById("pwWarning").innerHTML = "The password should contain at least 1 charaters and 4 numbers"
    }
    if(password.match(/[a-zA-Z]{1}\d{4}/)!==null){
        passwordWarning.style.borderColor=""
        document.getElementById("pwWarning").innerHTML=""
    }
    if(em.match(/@/)===null){
        emWarning.style.borderColor = "red"
        document.getElementById("emWarning").innerHTML = "Unvalid email"
    }
    if(em.match(/@/)!==null){
        emWarning.style.borderColor=""
        document.getElementById("emWarning").innerHTML =""
    }
}

                