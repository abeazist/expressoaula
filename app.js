const express = require('express');
const app = express();
const port = 8086;

app.get('/', function(req,res){
    res.send("Bem-vindo!");
})

app.get('/homepage', function(req,res,next){
    console.log("A resposta está na próxima função");
    next(); //NÃO ESQUEÇA DE CHAMAR O NEXT
}, (req,res) => {
    res.send("bea linda!")
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}...`)
});
