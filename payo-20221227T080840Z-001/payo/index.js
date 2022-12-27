// log in Function



function loginFunction() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username == "admin") && (password == "admin")) {
        window.alert("Log In Successfully");
        window.location = "admin.html";
    }
    else {
        window.alert("Log In failed");
    }
    console.log(username);
    console.log(password);

}