/*
    Crie  uma classe que simula um carrinho de compras se um e-commerce</
            Propedade  itens,quantidade toal, valor taola;<
            <Crie os  métodos para adiona e emover itens;
            */

class Carrinho {
    constructor(intes, qtd, valorTotal) {
        this.intes = intes;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
    //adiconado item  np carinho
    addItem(item) {

        //novo item

        let contador = 0;


        //lupe
        for (let itenCarrinho in this.intes) {
            if (this.intes[itenCarrinho].id == item.id) {
                this.intes[itenCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }
        if (contador == 0) {
            this.intes.push(item);//adisnando mais  um item
        }
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    //metodo para remover
    remoVidoItem(item) {

        for (let itenCarrinho in this.intes) {
            if (this.intes[itenCarrinho].id == item.id) {
                this.intes[itenCarrinho].qtd += item.qtd;

                //para pode remover acha  idex do proudo
                let obj = this.intes[itenCarrinho];
                let index = this.intes.findIndex(function (obj) { return obj.id == item.id });//meto de arrey para achar index

                //remoção total
                this.qtd -= this.intes[itenCarrinho].qtd;
                this.valorTotal -= this.intes[itenCarrinho].preco * this.intes[itenCarrinho].qtd;

                //removendo
                this.intes.splice(index, 1);

            }

        }

    }
}

//estaciando o carinho 
let carinho = new Carrinho([
    //fazendo uma arry
    {
        id: 1,
        nome: "Camiseta",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }

], 3, 120);// estou  falando do  valorTotal E intes

console.log('primwoeo', carinho);

carinho.addItem({ id: 1, nome: "Camieta", qtd: 2, preco: 20 });
console.log('segudo', carinho);

carinho.addItem({ id: 3, nome: "bone", qtd: 2, preco: 15 });
console.log('tersiro', carinho);

//remover  item carinhp
carinho.remoVidoItem({ id: 1, nome: "Camieta", qtd: 2, preco: 20 });
console.log('delete', carinho);