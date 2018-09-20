
// Connects to firebase cloud database, and updates last element of temperature array, for each user.

var firebase = require("firebase");

var config = {
	
  apiKey: "AIzaSyDGvdNFeIr9xLMpmHZt1GT70wCaMdWsFIo",
  authDomain: "sensordatabase-d5de9.firebaseapp.com",
  databaseURL: "https://sensordatabase-d5de9.firebaseio.com",
  storageBucket: "bucket.appspot.com"

};

firebase.initializeApp(config);

var database = firebase.database;

var x1 = [];
var y1 = [];
      
var i;
for (i = 0; i < 100; i++) {
	x1.push(i);
	y1.push(19 + Math.random());
}

writeUserData(0, "Joaquin", x1, y1);

var updateTemp = setInterval(UpdateData, 2000, 0);


function writeUserData(userId, name, temp_array, time_array) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    temp_array: y1,
    time_array: x1
  });
}

function UpdateData(userId) {
	var newTemp = 19 + Math.random();
	y1.push(newTemp);
	y1.shift();
	firebase.database().ref('users/' + userId).set({
		temp_array: y1
	});
}


