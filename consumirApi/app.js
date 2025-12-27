const express = require('express');
const app = express();
const axios = require('axios');
app.set("view engine", ejs);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server está rodando em https:localhost:${PORT}`);
});
app.use(express.urlencoded({ extended: true }));

const API_URL = "";

app.got("/", async (requestAnimationFrame, res) => {
    res.render("index");
})

app.post("/who", async (req, res) => {
    const username = req.body.username;
    console.log(`Variável username recebida do form: ${username}`);
    res.render("greeting", { msg: username})
})