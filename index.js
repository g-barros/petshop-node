const http = require('http');
const url = require('url');
const petshop = require('./petshop');

let server = http.createServer((req, resp) => {

    let urlCompleta = url.parse(req.url, true);
    
    if (urlCompleta.pathname == "/") {
        resp.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        resp.write("Você está na página inicial");
        resp.end();
    }

    if (urlCompleta.pathname == "/home") {
        resp.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        resp.write("Você está dentro do sistema Petshop!");
        resp.end();
    }

    if (urlCompleta.pathname == "/pet/adicionar") {
        if(petshop.adicionarPet(urlCompleta.query.nome)) {
            resp.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            resp.write("O pet foi cadastrado com sucesso!");
            resp.end();
        } else {
            resp.writeHead(401, {'Content-Type':'text/html; charset=utf-8'});
            resp.write("Erro ao cadastrar o pet.");
            resp.end();
        }
    }
    
});

server.listen(1212, 'localhost')