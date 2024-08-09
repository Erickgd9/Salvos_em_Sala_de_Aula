import express from "express";
import prompt from "prompt-sync";
let ler = prompt();

import { Calculo } from './Function.js' ;

const Livro = express();
Livro.use(express.json());

Livro.post('/treino/leituraLivro', ( req, resp ) => {
    let Nome = (req.body.livro);
    let Quantidade = Number((req.body.quantidade));
    let Tempo_Pagina = Number((req.body.tempo));

    let r = Calculo(Quantidade,Tempo_Pagina);

    resp.send(`Tempo total da leitura do livro ${Nome}, sera de ${r} Horas`);
})

Livro.listen( 5000, () => console.log('Carregando... ') );