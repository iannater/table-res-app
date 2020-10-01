// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation Data
const reservation = [];

// Waitlist Data
const waitlist = [];

// Routes

// Route to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  // Route to the view tables page
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Route to the make reservation page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  // Route to view the api reservation data
  app.get("/api/tables", function(req, res) {
    return res.json(reservation);
  });

  // Route to view the api waitlist data
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });
  
  // Route to send the reservation info
  app.post("/reserve", function(req, res) {
    
    var newReservation = req.body;
  
    console.log(newReservation);
  
    reservation.push(newReservation);
  
    res.json(newReservation);
  });

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });