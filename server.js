/* ================ Dependencias ================ */

const path = require("path");
const express = require("express");
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
