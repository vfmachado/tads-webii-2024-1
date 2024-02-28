console.log("TESTE 2");
/*
instalar nodejs
testar com node -v e npm -v
criar um arquivo index.js
execute com watch
node --watch index.js
*/

// comandos basicos

let variavel = 'X';
console.log(variavel);

const constante = 'MINHA CONSTANTE!';

let a = 2; 
// ==  faz avaliacao por valor
if (a == 2) {
    console.log("a eh igual 2!")
}

if (a === 2) {
    console.log("a eh igual 2 numerico!")
}

if (a == '2') {
    console.log("a eh igual 2 com == '2'!")
}

if (a === '2') {
    console.log("Se mostrar isso eu troco de profissao")
}

/*
if (teste) {

} else if (outro teste) {

} else {

}
*/

let cont = 1;
while (cont <= 5) {
    console.log({ cont });
    cont++;
}

let obj = { cont };
let nome = 'Vinicius';
let sobrenome = 'Fritzen';
// let geraNomeCompleto = (nome, sobrenome) => nome + ' ' + sobrenome;
let geraNomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

function geraNomeFn(nome, sobre) {
}

// literals
let str1 = " TESTE ";
let str2 = " OUTRO TESTE ";
let combinar = `${str1} ${str2}`;

const TEXTO = `TEM NO MEIO UMA ' (ASPAS SIMPLES)`;

const incremento = a => a+1;
console.log(incremento(2));

