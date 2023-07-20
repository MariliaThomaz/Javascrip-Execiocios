//ESTUDO 19_07_2023
//cria classe da conta
class Conta{
    constructor(saldo){//É um método especial dentro de uma classe que é chamado automaticamente quando um objeto é criado a partir dessa classe
        this.saldo =saldo;

    }
    //cria metodo 
    deposito(valor){
        this.saldo+=valor;
    }
    saque(valor){
        this.saldo-=valor;
    }
    
   
}
//istaciar a classe com valor
let conta = new Conta(1000);

    conta.deposito(1000);//colocar  um  valor dentro  do metodo

    console.log(conta.saldo);//esibindo

    conta.saque(500);
    console.log(conta.saldo);