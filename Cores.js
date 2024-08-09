import express from 'express';
import prompt from "prompt-sync";
let ler = prompt();

const Cores = express();

Cores.get('/treino/combinacaoCores', ( req, resp ) => {
    let cor1 = req.query.cor1
    let cor2 = req.query.cor1
    cor1.toLocaleLowerCase;
    cor2.toLocaleLowerCase;
    
    if ( cor1 == 'vermelho' &&  ) {


    }
    if () {


    }
    if () {


    }

    resp.send(`A cor resultaante é de ${Cor}`)
} )

Cores.listen( 5300, () => console.log(`Carregando...`) );