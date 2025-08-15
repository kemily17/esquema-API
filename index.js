const express = require("express")
const app = express()
const port = 3001
app.use(express.json())
const usuarios = []
const produtos = []
app.post('/usuarios', (req, res)=>{
    const usuario = req.body //"pega" os dados da requesição(/pergunta/dados tipo, de uma compra)
    usuarios.push(usuario) // adiciona o usuário na lista de usuários
    res.send("Usuário cadastrado com sucesso!")
})
app.get('/usuarios', (req, res)=>{
    res.send(usuarios)
})
app.post('/produtos', (req, res)=>{
    const produto = req.body 
    produtos.push(produto)
    res.send("Anime cadastrado com sucesso!")
})
app.get('/produtos', (req, res)=>{
    res.send(produtos)
})
app.get('/ola', (req, res)=>{
    res.send("Olá 3ºDS!")
})
app.listen(port, ()=>{
    console.log("API rodando...")
})