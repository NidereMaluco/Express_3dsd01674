const express = require("express");
const app = express()
const  path = require("path");

const PORT = 3333; //65k
//CRIAÇAO DE ROTAS      
app.use("/", express.static(__dirname + "public"));

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/src/views/about.html");
});

//criar rota 404 middleware

app.use(function (req,res) {
    res.status(404).sendFile(__dirname + "src/views/404.html");
});

app.listen(PORT, () => {
    console.log("running..." + PORT)
});