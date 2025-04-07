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

//PASAGEM POR PARAMETRO USANDO QUERY STRING
//localhost:8086/ola2?nome=Beatriz&sobrenome=Oliveira
app.get('/ola2', function (req,res){
    const {nome,sobrenome} = req.query
    res.send(`Bem vindo, ${nome} ${sobrenome}`)
});

app.get('/ola/:nome/:sobrenome', function (req,res){
    res.send(`Bem vindo, ${req.params.nome} ${req.params.sobrenome}`)
})




app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}...`)
});
