"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    console.log(`I'm ${batman} , ${abc.toString()}`);
    // Si existe un valor en la posición 10 lo convierte en mayúsculas, si no. Printea "No está presente"
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
