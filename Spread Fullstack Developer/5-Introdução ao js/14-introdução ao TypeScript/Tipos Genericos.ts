function adcionaApendiceALista<T>(array: any[], valor: T){
    return array.map(() => valor);
}

adcionaApendiceALista(['A','B','C'],3);