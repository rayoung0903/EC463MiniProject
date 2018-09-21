# EC463MiniProject
EC463 Mini Project SW

Ruiyang Shi:
Sign in page, sign up page and style sheet design and coding;
User Authentication and Registeration functions;
Initial SQL database coding and design(changed to firebase service later).

Joaquin Giorgi: 
Worked on integrating project with Firebase real-time database services;
Sensor simulation to database;
Fetching data from database for each user;

How it Works:

database0.js is a node.js file (must be run with node database0.js on terminal), which serves to simulate the sensor values for each user. These randomized sensor values are stored on the Firebase database. Home.html provides the login and register prompts, which create a new user with a username and password on Firebase. Having logged on, or setup an account, the user is sent to index3.html, which graphs the temperature data of their room, with an updated every two seconds. These graphs update their data by referring to the Firebase database. 

Home.html, can be started by loading up Home.html on localhost (for example, with Visual Studios).

