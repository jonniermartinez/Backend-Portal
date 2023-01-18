const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");

const app = express();

const PORT = 4000; 

// Midelware que nos va a permitir enviar data del front al back o viceversa estando en el mismo puerto o servidor
app.use(cors());
app.use(express.json());

app.get("/user/:id", controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

app.get("/logs", controllers.getLogs);
app.post("/newLog", controllers.newLog);
 
app.listen(PORT, () => {
    console.log(`Sever funcionando en el puerto ${PORT}`);
    db();
});

module.exports = app;