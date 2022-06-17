interface IUsuario {
    id: string;
    email: string;
    cargo?:  'gerente' | 'cordenador' | 'supervisor' | 'funcionario' ;

}

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        // redirecionar(usuario.cargo);
    }

    //  redirecionar para a área do usuário
}