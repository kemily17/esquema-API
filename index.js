const express = require("express")
const app = express()
const port = 3000
app.get('/ola', (req, res)=>{
    res.send("ola 3°ds!")
})
app.listen(port, ()=>{
    console.log("API rodando...")
})