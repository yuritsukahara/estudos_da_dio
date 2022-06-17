interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
   +readonly [K in keyof ICachorro]-?: ICachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade, parqueFavorito){
        this.idade = idade;
        this.nome = nome;
        this.parqueFavorito = parqueFavorito;
    }
}

const cao = new MeuCachorro('Apolo', 14, 'Biguaçu');
cao.idade = 8

console.log(cao);