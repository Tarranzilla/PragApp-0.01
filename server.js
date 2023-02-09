/* ================ Dependencias ================ */
const env = require("dotenv").config();
const path = require("path");
const express = require("express");
const mongodb = require("mongodb");
//const cors = require("cors");

/* App se torna uma instancia de express */
const app = express();

const connectionPassword = process.env.CONNECTIONPASSWORD;
const connectionString =
    "mongodb+srv://pragmata:" +
    connectionPassword +
    "@cluster0.gxrvnnw.mongodb.net/Database_001?retryWrites=true&w=majority";
mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to Database");
            db = client.db();
        }
    }
);

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
