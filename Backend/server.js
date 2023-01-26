const express = require('express');
const { dirname } = require('path');
const path = require('path')
const PORT = process.env.PORT||80;// pour éviter les conflits d'app sur le meme port
const HOST = process.env.HOST;
const app = express()
app.use("/",express.static(path.join(__dirname,'angular')));// le chemin statique des fichiers
app.get('',(req,res) => {
    res.sendFile(path.join(__dirname,'angular','index.html'));
});

app.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});
