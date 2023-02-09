/* ================ Dependencias ================ */
const dotenv = require("dotenv").config();

const path = require("path");
const express = require("express");
const mongodb = require("mongodb");
//const cors = require("cors");

/* App se torna uma instancia de express */
const app = express();

mongodb.connect(process.env.CONNECTIONSTRING, function (err, client) {});

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
