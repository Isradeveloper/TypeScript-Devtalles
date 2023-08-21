"use strict";
(() => {
    const fullName = (firstName, lastName, upperCase = false) => {
        if (upperCase) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Tony');
    console.log({ name });
})();
