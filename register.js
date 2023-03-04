var users = localStorage.getItem("users");
$(function () {

});

// Registration - Collect it in an array 
// Store the array in local storage as json object 
function formValidation() {
    // Get the HTML elements
    var userId = GetUserID();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("psw").value;
    var membership = document.getElementById("membership").value;

    var userObj = {
        "id": userId,
        "name": name,
        "email": email,
        "dateOfBirth": dateOfBirth,
        "gender": gender,
        "password": password,
        "membership": membership
    };

    addUserDataToLocalStorage(userObj);

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('date-of-birth').value = "";
    document.getElementById('psw').value = "";
    return true;
}

function GetUserID() {
    const ID = Date.now();
    return ID;
}

function addUserDataToLocalStorage(userObj) {

    //already has data in localstorage then update it other create new one
    var users = JSON.parse(localStorage.getItem('userData'));
    if (users != null) {
        users.push(userObj);

        localStorage.setItem('userData', JSON.stringify(users));
    }
    else {
        var userData = new Array();
        userData.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userData));

    }
}