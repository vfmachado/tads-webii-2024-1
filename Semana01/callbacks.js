
const fn = () => new Promise((resolve, reject) => {
    const initialTime = new Date().getTime();
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += Math.random();
    }
    const finalTime = new Date().getTime();
    const time = finalTime - initialTime;
    // console.log({ time, sum })
    resolve({ time, sum});
});

fn().then(resp => console.log(resp));
// console.log("INICIANDO");
// const result = fn();
// console.log(result);

// console.log("TERMINANDO");

const somaMasDemora = (a, callback) => {
    setTimeout(() => {
        // console.log(a + 1);
        let result = a+1;
        callback(result);
    }, 3000);
}

somaMasDemora(100, (resultado) => {
    console.log(resultado);
});

async function main() {
    const resultado = await fn();
    console.log({ resultado });
}

main();


// OUTRAS COISAS DE JS QUE APARECEM BASTANTE

/*
    utilização do THIS
    métodos de string
    métodos de array (principalmente)    (w3 schools)
        .filter / .map / .every / .reduce / ...
    callback vs promise vs async/await
*/
