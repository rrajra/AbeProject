var firstName;
var lastName;
var phoneNumber;
var email;
var issue;
var date1;
var date2;
var date3;
var time1;
var time2;
var time3;

document.getElementById("nameFInput").addEventListener("focusout", checkFName);
document.getElementById("nameLInput").addEventListener("focusout", checkLName);
document.getElementById("phoneInput").addEventListener("focusout", checkNumber);
document.getElementById("emailInput").addEventListener("focusout", checkEmail);
document.getElementById("submitBtn").addEventListener("click", submitData);

window.onbeforeunload = function () {

        return "";
}; 

// All the checkX functions make sure fields are not empty
function checkFName() 
{
    var firstNameBox = document.getElementById("nameFInput")
    if(firstNameBox.value.length === 0) 
    {
        firstNameBox.style.backgroundImage = "url('warning.svg')";
    }
    else 
    {
        firstNameBox.style.backgroundImage = "";
        firstName = firstNameBox.textContent;
    }
}

function checkLName() 
{
    var lastNameBox = document.getElementById("nameLInput");
    if(lastNameBox.value.length === 0) 
    {
        lastNameBox.style.backgroundImage = "url('warning.svg')";
        console.log(lastNameBox.textContent.length);
    }
    else 
    {
        lastNameBox.style.backgroundImage = "";
        lastName = lastNameBox.textContent;
        console.log("aa");
    }
}

function checkNumber() 
{
    var numberBox = document.getElementById("phoneInput")
    if(numberBox.value.length === 0) 
    {
        numberBox.style.backgroundImage = "url('warning.svg')";
    }
    else 
    {
        numberBox.style.backgroundImage = "";
        phoneNumber = numberBox.textContent;
    }
}

function checkEmail() 
{
    var emailBox = document.getElementById("emailInput")
    if(emailBox.value.length === 0) 
    {
        emailBox.style.backgroundImage = "url('warning.svg')";
    }
    else 
    {
        emailBox.style.backgroundImage = "";
        email = emailBox.textContent;
    }
}
function submitData()  
{
    // Gets first name
    firstName = document.getElementById("nameFInput").value;
    // Gets last name
    lastName = document.getElementById("nameLInput").value;
    // Gets phone #
    phoneNumber = document.getElementById("phoneInput").value;
    // Gets email
    email = document.getElementById("emailInput").value;
    // Gets Issue
    issue = document.getElementById("legalIssue").value;
    // Gets all three dates
    date1 = document.getElementById("dateInput1").value;
    date2 = document.getElementById("dateInput2").value;
    date3 = document.getElementById("dateInput3").value;
    // Gets all times
    time1 = document.getElementById("timeInput1").value;
    time2 = document.getElementById("timeInput2").value;
    time3 =document.getElementById("timeInput3").value;

    //Converts user data to JSON format for easy readability
    var newUser =
    {
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: phoneNumber,
        Email: email,
        LegalIssue: issue,
        dates: {
            date1: date1,
            time1: time1,
            date2: date2,
            time2: time2,
            date3: date3,
            time3: time3
        }
    }
    console.log(newUser);
}