console.log("FUNCIONA");

// JSON
// JS OBJECT NOTATION

const person = {
    firstname: "Vini",
    lastname: "Machado"
}

const p2 = {
    firstname: "Vini",
    lastname: "Machado",
    middlename: "Fritzen"
}


console.log(person.firstname)
console.log(person?.middlename)


const objeto = {
    prop1: 'valor1',
    prop2: 'valor2',
};

// const prop1 = objeto.prop1;
const { prop1 } = objeto;

const array = ['um', 'dois', 'tres'];
const [primeiro, ...rest] = array;

const obj1 = {
    a: { v : 1},
    b: 2,
    c: 3
}

let d = obj1.a;
