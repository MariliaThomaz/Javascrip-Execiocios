
console.log(typeof 14.0); ///mostrando tipo

// quando uso  === eu vendo  coisa  identes

console.log('quando uso  ==== eu  \n compando é identico');


console.log('vendo qual é valo maio se 30 > 22?: ', 30>22);
console.log('vendo qual é valo iqual 30 === 22?: ', 30===22);
console.log('vendo qual é valo iqual 30 === 30?: ', 30===30);

console.log('operadpr logico && - and', 5>3 && 3 == 2);
console.log('operadpr logico || - or', 5> 3|| 3 == 1);
console.log('operadpr logico ! - not');

//valores vasios 

//para quagar valores
// var delara  varive
// delcar variavel -->  const <-- valor  pode ser alterado
//declar  let laraja = 5
let laraja =2;
let maca = 2;
let resptas =0;
resptas =  maca + laraja;

console.log('resota das frutas: ', resptas);

//para exibir alguma coisa  
//alert("aprendo JS");

//Biblioteca  função mateticas
//Math.max

//vendo qual numero maio
let maio = Math.max(6,12,5,8);
console.log('quela  é vamor  maio: ', maio);

let menor = Math.min(6,12,5,8);
console.log('quela  é vamor menor: ', menor);

//para redondar  nuemo
let aredarNumero = Math.round(7.57844);
console.log("arendao nuemro: ", aredarNumero);

console.log(`quantas larajas eu tenho: ${laraja}, e quantas  maças eu tenho: ${maca}`);

//lupe  
let x = 10 ;
while (x > 0){
    console.log('o que é valo de x: ', x);
    x = x -1;
}

//lup for 
 for (let i =0; i < 20; i = i +1){
    console.log(`a somo dos valores de 2é : valode de  I:${i} + 2 = ${i+2}`);
 }

 //continue

 for (let i =0; i < 10; i = i +1){
    if(i % 2 == 0){
       console.log("caio no continue:  é valor par> ", i);
        continue; 
    }
    console.log(i);
 }
//função

function imprinaNumero(num){
    console.log("o valoré: ", num);
}
imprinaNumero(5);
imprinaNumero(2);
imprinaNumero(1);
imprinaNumero(77);

function conta(d,g){
    
    let respota = d * g;

    return(respota);

}

//length ve compeimeto da isntrig

const respta = conta(7,7);


    console.log("o valor e: ", respta);


//push  iseri
//pop tira

let nome = ["maria", 'carol','pwdro'];
let tirandoumaPesso = nome.pop();
console.log("o nome  tirado: ", tirandoumaPesso);

nome.push('Marilia');
console.log("o nome  colocado: ", tirandoumaPesso);

//tira dados shift começo