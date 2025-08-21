/**
 * EXEMPLO DE FUNÇÃO EM JAVA
 * public int exemplo (int a){
 *      return a;
 * }
 * 
 * EXEMPLO DE FUNÇÃO EM C
 * int exemplo (int a){
 *      return a;
 * }
 * 
 * CRIANDO UMA FUNÇÃO EM NodeJS
 */
var soma = function  (a, b, c){
    if ((a + b) <c){
        return 'a soma de a e b é menor que c'
    }
    return 'a mais b é maior que c';
}

//DECLARANDO A FUNÇÃO COMO PÚBLICA
module.exports = soma;