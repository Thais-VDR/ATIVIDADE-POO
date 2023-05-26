// let pessoa = ['Thais', 17, '10/11/2005']

// let pessoa2 = {
//     nome: 'Thais',
//     idade: 17,
//     dataNascimento: '10/11/2005'
// }

// document.write(pessoa2.nome)
// document.write(pessoa2.idade)







// const cachorro = {
// raca: 'Doberman',
// cor: 'Preto',
// idade: 5,
// //metodo
// uivar: function(){
//     document.write('AUUUUUUUUUUUUU!!!')
// },
// //metodo
// rosnar: function(){
//     document.write('GRRRRRRRRRR!!!!')
// }
// }
// cachorro.rosnar()

// class Cachorro {
//    constructor(raca,cor,idade){
//       this.raca = raca
//       this.cor = cor
//       this.idade = idade
//    }
//    latir(){
//        document.write('au au au')
//    }
// }





// let labrador = new Cachorro('labrador','caramelo', 2)

// let pitBull = new Cachorro('Pitbull', 'Preto', 3)

// document.write(labrador.raca)
// document.write('<br>',labrador.cor)
// document.write('<br>',labrador.idade)

// pitBull.latir()

// const corDog = document.querySelector('#cor')
// const botao = document.querySelector('#botao')

// class Cachorro {
//     constructor(raca,cor){
//         this.raca = raca
//         this.cor = cor
//     }
//     latir(){
//         document.write('au au au')
//     }

//     get getCor(){
//         return this.cor
//     }
//     set setCor(cor){
//      this.cor = cor
//     }
// }

// let pastor = new Cachorro('Pastor Alemão', 'Sem Cor')

//  botao.addEventListener('click', function(){
//     pastor.setCor = corDog.value
//     document.write(pastor.cor)
// })




//Criar uma classe de um carro que contenha modelo,cor,marca.O carro deve ter um metodo de status.
//Esse status define se o carro está em movimento ou parado.

// class Carro {
//     constructor(modelo,cor,marca,estado){
//         this.modelo = modelo
//         this.cor = cor
//         this.marca = marca
//         this.estado = estado
//     }
//     getEstado(){
//         return this.estado
//     }
//     setEstado(estado){
//         this.estado = estado
//     }
// }

// let corolla = new Carro('Corolla', 'Preto', 'Toyota', 'Parado')

// corolla.setEstado('Andando')

// document.write(corolla.estado)


