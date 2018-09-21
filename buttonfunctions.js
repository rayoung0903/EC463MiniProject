
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
    firebase.database().ref('users/' + userId).set({
        name: "James"
    });


}

function logout() {

    firebase.auth().signOut();

    window.location.href = "Home.html";
    
}