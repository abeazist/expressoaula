const express = require('express');
const app = express();
const port = 8086;

// app.get('/', function(req,res){
//     res.send("Bem-vindo!");
// })

// app.get('/homepage', function(req,res,next){
//     console.log("A resposta está na próxima função");
//     next(); //NÃO ESQUEÇA DE CHAMAR O NEXT
// }, (req,res) => {
//     res.send("bea linda!")
// });

// //PASAGEM POR PARAMETRO USANDO QUERY STRING
// //localhost:8086/ola2?nome=Beatriz&sobrenome=Oliveira
// app.get('/ola2', function (req,res){
//     const {nome,sobrenome} = req.query
//     res.send(`Bem vindo, ${nome} ${sobrenome}`)
// });


// app.get('/feriado', function(req,res){
//     fetch("https://brasilapi.com.br/api/feriados/v1/" + 2024)
//         .then((response) => response.json())
//         .then((feriado) => {
//             res.send(`Os feriados do ano de 2024 é, ${feriado.name}, ${feriado.date} são:`);
//         })
//         .catch(error => {
//             console.log("Erro ao acessar o link");
//             res.send("Ops, houve um erro");

//         })
// });

app.get('/feriado/:ano', function (req, res) {
    fetch(`https://brasilapi.com.br/api/feriados/v1/${req.params.ano}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (feriados) {
            let lista = '';
            feriados.forEach(function (f) {
                lista += `\n- ${f.date}- ${f.name}`;
            });

            res.send(`
                Feriados do ano:
                ${req.params.ano}
                ${lista}
            `);
        })
       
});


app.get('/livros/:isbn', function(req,res){
    const isbn = req.params.isbn;

    fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`)
        .then((response) => response.json())
        .then((livros) => {
            res.send(`
                Informações do livro ${livros.title}, 
                código ISBN ${livros.isbn}, 
                ano ${livros.year}, 
                autores ${livros.authors},
                sinopse: ${livros.synopsis}
                `);
        })
        .catch(error => {
            console.log("Erro ao acessar o link");
            res.send("Ops, houve um erro");

        })
});




app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}... blueblueblue`)
});
