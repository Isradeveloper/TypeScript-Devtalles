"use strict";
(() => {
    // VOID - Se usa cuando las funciones no retornan nada (Undefined)
    function callBatman() {
    }
    function callSuperman() {
        return;
    }
    const a = callBatman();
    console.log(a);
})();
