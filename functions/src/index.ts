import * as functions from 'firebase-functions';
const emailjs = require('emailjs/email');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
var server 	= email.server.connect({
    user:    "utkarshd80@gmail.com", 
    password:"utkarsh@19939", 
    host:    "smtp.gmail.com", 
    ssl:     true
 });
  
 // send the message and get a callback with an error or details of the message that was sent
 server.send({
    text:    "i hope this works", 
    from:    "you <username@your-email.com>", 
    to:      "someone <someone@your-email.com>, another <another@your-email.com>",
    cc:      "else <else@your-email.com>",
    subject: "testing emailjs"
 }, function(err, message) { console.log(err || message); });