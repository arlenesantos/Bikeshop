const express = require("express");
const app = express();

const { consultarTiendas, consultarCategorias, consultarMarcas, mostrarInventario } = require("./consultas");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//pasta publica e estilo css
app.use(express.static(__dirname + "/assets"));
app.use('/css', express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/js', express.static(__dirname + "/node_modules/bootstrap/dist/js"));


app.listen(3000, () => console.log("server on"));

app.get("/", async (req, res) => {
    try {        
        res.sendFile(__dirname + "/index.html");

    } catch (error) {
        res.status(500).send({ error: error, code: 500 });        
    }    
});

app.get("/monitor", async (req, res) => {
    try {
        const tiendas = await consultarTiendas();
        const categorias = await consultarCategorias();
        const marcas = await consultarMarcas();
        res.statusCode = 200;
        res.send({ tiendas, categorias, marcas });     
        
    } catch (error) {
        res.status(500).send({ error: error, code: 500 });        
    }    
});

app.post("/inventario", async (req, res) => {
    try {
        let { tienda, categoria, marca } = req.body;        
        let inventario = await mostrarInventario(tienda, categoria, marca);              
        res.statusCode = 200;
        res.send({ inventario });     
        
    } catch (error) {
        res.status(500).send({ error: error, code: 500 });        
    }    
});
