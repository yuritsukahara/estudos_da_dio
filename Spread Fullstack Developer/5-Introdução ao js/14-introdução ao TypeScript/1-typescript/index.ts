 // types
 // interfaces

 interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
 }

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

 const ANIMAL: IAnimal = {
    nome: 'Elefante',
    tipo: 'aquático',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
 }

ANIMAL.executarRugido(10)

 const FELINO: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)

 }