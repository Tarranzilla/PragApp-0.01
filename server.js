/* ================ Dependencias ================ */
const dotenv = require("dotenv").config();

const path = require("path");
const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.CONNECTIONSTRING;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

//const cors = require("cors");

/* App se torna uma instancia de express */
const app = express();
/* ================ Configurações ================ */
//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.json());

/* ================ Middlewares ================ */

// Nenhum

/* ================ Rotas ================ */

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* ================ Porta do Servidor ================ */

app.listen(process.env.PORT || 4444);
