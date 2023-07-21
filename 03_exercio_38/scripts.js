/*
    Crie  uum  objeto que simula  um endereço de  um cliente
    Propiedade: Rua, Bairro, Cidade e Estado:
    No construtor o endereço já deve  ser definido por completo:
    Cri métpdps para atualizar todos as propriedades:
            */

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    //cria set  acresta nova rua
    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado =novoEstado;
    }
}
//criando metodos 

let endereço = new Endereco("Coqurinhos ", "Floresta", 'Monti Belo', 'SP');

console.log(endereço);

endereço.novaRua = "Rua dos Pardais";

endereço.bairro ="Critais";
endereço.cidade="Vinhedos";
endereço.estado= 'SC';

console.log("nova cidade ", endereço);