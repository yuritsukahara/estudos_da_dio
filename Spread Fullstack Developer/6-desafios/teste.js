let lines = '5';

//TODO: Complete os espaços em branco com uma possível solução para o desafio


let N = parseInt(lines);
let frase = ''
for (var i=1; i<=N; i++) {
    if (   i < N        ) frase +=   'Ho '   ;
    else frase +=  'Ho!'      ;
}
console.log(frase);