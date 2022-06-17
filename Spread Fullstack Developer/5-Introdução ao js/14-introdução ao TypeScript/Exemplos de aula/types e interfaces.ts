 // types, utilizado para fazer junções
 // interfaces, usados para fazer contratos de classe

 /*
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
 */

 interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
 }

 interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'médio' | 'grande';
}

type IDomestico = IFelino | ICanino;

 const ANIMAL: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    tipo: 'terrestre',
    porte: 'médio',
    visaoNoturna: false,
 }

 
