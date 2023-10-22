


export interface Conteudo {

    id: number,
    destino: string,
    imagem: string,
    preco: number

}


export interface Depoimento {
    id: number;
    imagem: string
    texto: string;
    autor: string;
}


export interface PessoaUsuaria {
    nome: string;
    nascimento: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    cidade: string;
    estado: UnidadeFederativa;
}
  
export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}
