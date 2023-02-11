document.getElementById("btn").addEventListener("click" ,function(){
    
    const emailField = document.getElementById("input-email");
    const email = emailField.value;

    const passField = document.getElementById("input-pass");
    const pass = passField.value;

    if(email =="user@gmail.com" && pass =="123"){
        window.location.href="home.html";
    }
    else{
        alert("Please Enter Valid user Informations");
    }

});