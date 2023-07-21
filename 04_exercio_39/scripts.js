/*
    Crie  uma  classe que simule  um carro
    Propridades: marca, cor gasoluna restante:
    cri um método de durugir o carro, que  vá diminundo a gasolina gradativamene
    E um de  bastece  para aumenta a gasolina quando necessario;
            */

class Carro{
    constructor(marca, cor, gaolinaRes, consumo){
        this.marca =  marca;
        this.cor = cor;
        this.gaolinaRes = gaolinaRes;
        this.consumo =consumo;
    }

    //meroso 
    dirigir(km){
        let litrosConsumido = km / this.consumo;
        this.gaolinaRes-= litrosConsumido;
    }

    abastecer(Litro){
        this.gaolinaRes += Litro; 
    }
}
let carro = new Carro ('VW', 'Cinza', 100, 14);
console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);

