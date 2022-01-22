const express = require("express");
const app = express();

//const { } = require("./consultas");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//pasta publica e estilo css
app.use(express.static(__dirname + "/assets"));
app.use('/css', express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/js', express.static(__dirname + "/node_modules/bootstrap/dist/js"));


app.listen(3000, () => console.log("server on"));

app.get("/", (req, res) => {
    try {
        res.sendFile(__dirname + "/index.html");

    } catch (error) {
        res.status(500).send({ error: error, code: 500 });        
    }
    
});
