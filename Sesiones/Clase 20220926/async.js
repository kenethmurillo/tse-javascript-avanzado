
// Tareas Secuenciales
const funcB = () => {
    console.log("DOS");
};

const funcA = () => {
    console.log("UNO");
    funcB();
    console.log("TRES");
};

//funcA();

// Tareas No Secuenciales

console.log("Inicio");
const dos = () => {
    setTimeout(function () {
        console.log("DOS");
    }, 1000);
};

const uno = () => {
    setTimeout(function () {
        console.log("UNO");
    }, 0);
    dos();
    console.log("TRES");
};

//uno();
console.log("Fin");

// Inicio - Tres - Fin - Uno - Dos


/**
 * Callback
 */

function task(num, callback) {
    const nums = [];

    for (let i = 0; i < num; i++) {
        const n = 1 + Math.floor(Math.random() * 6);
        nums.push(n);

        if (n === 6) {
            callback({
                error: true,
                message: "Se ha procesado un 6"
            });
            return
        }
    }

    return callback(null, {
        error: false,
        message: nums
    })
}

task(10, function (err, result) {
    if (err) {
        console.error("No se ha procesado", err.message);
        return;
    }
    console.log("Se ha procesado", result.message);
});


// Callback con estructura anidada

function calculate(value, callback) {
    setTimeout(() => { callback(value, value * value); }, 0 | (Math.random() * 1000));
};


calculate(0, (value, result) => {
    console.log('Inicia Estructura Anidada');
    console.log(`Callback: ${value}, ${result}`);
    calculate(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        calculate(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            calculate(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                console.log('Fin Estructura Anidada');
            });
        });
    });
})


/**
 * Promises
 */

function calculatePromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, valor no es un número.`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | (Math.random() * 1000));
    });
};

calculatePromise(0)
    .then((obj) => {
        console.log("Inicio de Promesa");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return calculatePromise(1);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return calculatePromise(2);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return calculatePromise(3);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return calculatePromise(4);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("Fin de Promesa");
    })
    .catch((err) => console.error(err));


// import fetch from "node-fetch";
// import fetch from "cross-fetch";

/*
const fetch = require("node-fetch");
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(function (response) {
        // Manejar la respuesta
        return response.json();
    })
    .then((data) => {
        let authors = data;
        console.log(authors);
    })
    .catch(function (err) {
        // Manejar el error
        console.error(err);
    });
*/

/**
 * Async / Await
 */

async function taskAsync(num) {
    const nums = [];

    for (let i = 0; i < num; i++) {
        const n = 1 + Math.floor(Math.random() * 6);
        nums.push(n);

        if (n === 6) {
            return {
                error: true,
                message: "Se ha procesado un 6"
            };
        }
    }

    return {
        error: false,
        message: nums
    };
}

async function execute() {
    const resultado = await taskAsync(10);
    console.log("Resultado: ", resultado);
}

execute();



