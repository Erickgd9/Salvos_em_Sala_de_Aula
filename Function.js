import prompt from "prompt-sync";
let ler = prompt();

function Calculo( q, t ) {
    let r = 0;
    q *= 60;
    r = ( q / t );
    r /= 60;

    return r.toFixed(1);
}

export { Calculo };