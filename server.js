/* ================ Dependencias, Constantes, Variáveis e Setup ================ */
const dotenv = require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

//Setup do MongoDB
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.CONNECTIONSTRING;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

/* App se torna uma instancia de express */
const app = express();

/* ================ Configurações ================ */

//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.json());

/* ================ Middlewares ================ */

// Nenhum

/* ================ Banco de Dados ================ */

//Busca por usuários
client.connect(function (err) {
    const db = client.db("database002");
    console.log("Conectado ao banco de dados");
    const results = db.collection("users").find().toArray();
    console.log(results);
});

/* ================ Rotas ================ */

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* ================ Porta do Servidor ================ */

app.listen(process.env.PORT || 4444);
