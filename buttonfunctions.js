
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.href = 'index2.html';
    } else {
        document.getElementById("login-page").style.display = "block";
    }
});


function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
    });
}

function register() {

    var userEmailr = document.getElementById("email_register").value;
    var userPassr = document.getElementById("password_register").value;

    firebase.auth().createUserWithEmailAndPassword(userEmailr, userPassr).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
    });

    var user = firebase.auth().currentUser;
    var userId = user.uid;
    // Random base temp between 15 and 20.
    var baseTemp1 = 15 + Math.random() * 5;

    var time_array1 = [];
    var temp_array1 = [];

    for (i = 0; i < 100; i++) {
        time_array1.push(i);
        temp_array1.push(base_temp1 + Math.random());
    }

    firebase.database().ref(userId).set({
        temp_array: temp_array1,
        time_array: time_array1
    });

}