/********* Destructuración ***********/
const user = {
    name: 'Keneth',
    role: 'SysAdmin',
    age: 32,
    siblings: ['Maria', 'Pablo']
};

const { name, role, age } = user;
const { siblings: familia } = user;

console.log(name);
console.log(role, age);
console.log(user);
console.log(familia);


// Sin Destructuración
let x = 5;
let y = 10;

let aux = x;
x = y;
y = aux;
console.log(x, y);

// Con Destructuración
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(a, b);

/*** Rest (Agrupar) ***/

const userAD = {
    ...user,
    password: 'ajsoijasoidj',
    modifiedDate: '2022-09-08'
}
console.log(userAD);


/** Destructuración y Restructaración de Arreglos **/

const numerosA = [5, 2];
const [firstA, lastA] = numerosA;
console.log(firstA, lastA)

const numerosB = [5, 2, 6, 7, 9];
const [firstB, secondB] = numerosB;
console.log(firstB, secondB)

const numerosC = [5, 2, 6, 7, 9];
const [firstC, , ,fourthC] = numerosC;
console.log(firstC, fourthC)

/*** Spread (Expandir) ****/

// Ejemplo 1
function debug(param){
    console.log(...param);
}

let spreadArray = [1,2,3,4,5];
debug(spreadArray);

// Ejemplo 2
let spreadArrayFull = [...spreadArray, 6,7,8,9];
console.log(spreadArrayFull);


/*** Rest (Agrupar) ***/

function debugRest(...param){
    console.log(param);
};
debugRest(1,2,3,4,5,6);
