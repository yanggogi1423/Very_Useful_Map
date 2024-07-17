document.getElementById("sign-up").onsubmit = function(){
    var email = document.getElementById("email");

    var pw = document.getElementById("password");
    var pw2 = document.getElementById("password2");

    var lName = document.getElementById("password");
    var fName = document.getElementById("password");

    var username = document.getElementById("username");
    
    console.log(email);
    console.log(pw1);
    console.log(pw2);
    console.log(lName);
    console.log(fName);
    console.log(username);

    return false;
}