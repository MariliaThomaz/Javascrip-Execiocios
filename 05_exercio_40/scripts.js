/*
    Crie  uma  classe conta bancaria;
    Com as  propriedade de saldo  na conta xorrente, saldo na conta
    poupança e  juros da  poupaça
    cri os  métosos de deposto e saque tambem um métoso para 
    transferir dinhero da poupaça para a conrrente;
    Alé dissp crie uma conta especial  que herda da conta normal;
    Na conta especial ps  juro são  dobeados ca conta norma;
    */

class Conta {
    constructor(saldoCC, saldoCP, juro) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juro = juro;

    }

    //criando um  metodo
    deposito(valor) {
        this.saldoCC += valor;
    }
    saque(valor) {
        this.saldoCC -= valor;
    }

    trasFerenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    trasFerenciaCC(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    jurosDeAniverio() {
        let juros = (this.saldoCP * this.juro) / 100;
        this.saldoCP += juros;
    }
}
class ContaEpecial extends Conta {
    constructor(saldoCC, saldoCP, juro) {
        super(saldoCC, saldoCP, juro * 2)
    }


}
let conta = new Conta(100, 5000, 1);

console.log(conta);

conta.saque(500);
console.log("saque", conta);

conta.deposito(5000);
console.log("deposito: ", conta);

conta.trasFerenciaCC(3000);//pouando dinheiro
console.log("Poupando: ", conta);

conta.jurosDeAniverio();
console.log("juros anivesario: ", conta);

let conta2 =  new ContaEpecial(10000, 5000, 1);

console.log(conta2);
conta2.saque(500);
console.log("Conrta 2, saque: ", conta2);