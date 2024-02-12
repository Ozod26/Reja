console.log("Wep Serverni boshlash");
const express = require("express");
const res = require('express/lib/response')
const app = express(); // () expressni app objectini yuboradi 
// const fs = require("fs");



// MongoDB chaqirish
const db = require("./server.js").db();


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if(err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data)
//   }
// });

// 1: Kirish code
//expressga kirib kelaytgan malumotlarga bogliq bolgan code yoziladi
app.use(express.static("public"));
app.use(express.json()); //objectga ogirib beradi
app.use(express.urlencoded({extended: true})); // hrml, formdan post qilgan narsani qabul qd //  true nest objectni ochib beradi.

// 2: session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing code  
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success" })
});

app.get('/author', (req, res) => {
  res.render("author", {user: user}); 
});

app.get("/", function (req, res ) {
    res.render("reja");
});


// app.get("/hello", function(req, res) {
//  res.end(`<h1>HELLO WORLD</h1>`);
// });
// app.get("/gift", function(req, res) {
//     res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
//    });

module.exports = app;