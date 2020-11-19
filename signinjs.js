// This is the username of the user
var username;
// Users password
var password;

document.getElementById("usernameInput").addEventListener("focusout", checkUsername);
document.getElementById("passwordInput").addEventListener("focusout", checkPassword);
document.getElementById("submitBtn").addEventListener("click", verifyInfo);

// Checks to make sure username field is not empty
function checkUsername() 
{
    var usernameBox = document.getElementById("usernameInput");
    if(usernameBox.value.length === 0) 
    {
        usernameBox.style.backgroundImage = "url('warning.svg')";
    }
    else 
    {
        usernameBox.style.backgroundImage = "";
        username = usernameBox.value;
    }
}

//Checks to make sure password field is not empty
function checkPassword() 
{
    var passwordBox = document.getElementById("passwordInput");
    if(passwordBox.value.length === 0) 
    {
        passwordBox.style.backgroundImage = "url('warning.svg')";
    }
    else 
    {
        passwordBox.style.backgroundImage = "";
        password = passwordBox.value;
    }
}

// Verifies that info is not blank, then logs user in.
// If this was for production use, 
// would need to verify that username + password is correct too 
function verifyInfo() 
{
    //Ensures that both fields aren't blank
    if(username != "" && password != "" && username != undefined && password != undefined) 
    {
        console.log(username);
        console.log(password)
        alert("logged in.");
    }
    else 
    {
        console.log(username);
        console.log(password);
        if(username == "" || username == undefined) 
        {
            document.getElementById("usernameInput").style.backgroundImage = "url('warning.svg')";
        }
        if(password == "" || password == undefined) 
        {
            document.getElementById("passwordInput").style.backgroundImage = "url('warning.svg')";
        }
    }
}