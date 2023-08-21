"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!';
    let myFunction;
    // let myFunction: (y: number, z: number) => number;
    // let myFunction: () => void;
    myFunction = addNumbers;
    console.log(myFunction(1, 3));
    myFunction = greet;
    console.log(myFunction('Isra'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
