
console.log("Wep Serverni boshlash");
const express = require("express");
const res = require('express/lib/response')
const app = express(); // () expressni app objectini yuboradi 
// const fs = require("fs");



// MongoDB chaqirish
const db = require("./server.js").db();
const mongodb = require('mongodb')


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
app.use(express.json()); //json farmatdagi datani objectga ogirib beradi
app.use(express.urlencoded({extended: true})); // hrml, formdan post qilgan narsani qabul qd //  true nest objectni ochib beradi.

// 2: session code

// 3: Views code
app.set("views", "views"); //frontetimizni views folderdan topish
app.set("view engine", "ejs"); //bizi frontet ejs frmatida

// req maulumat olish
// response javob berish 
// 4 Routing code  
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, 
    function(err, data) {
    res.json({state: "success" });
  }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id) }, 
    { $set: { reja: data.new_input } }, 
    function(err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
}); 
 
// callback 
// array ichidagi object
app.get("/", function (req, res) {
    console.log('user entered /create-item');
    db.collection("plans").find().toArray((err, data) => {
      if(err) {
        console.log(err);
        res.end("somthing went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});


module.exports = app;


 
