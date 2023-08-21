"use strict";
(() => {
    // Objetos
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    // Villanos debe de ser un arreglo de objetos personalizados
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    // Multiples tipos
    // cree dos tipos, uno para charles y otro para apocalipsis
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis);
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
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
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
})();
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable;
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.554586;
    console.log(avenger.toFixed(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push('11');
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => console.log(villian.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = true;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = 10;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    // Se utiliza never cuando la función no debe completarse correctamente. (Errores o reventar)
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
});
(() => {
    let nada = undefined;
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123');
})();
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
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let FuerzasHeroes;
    (function (FuerzasHeroes) {
        FuerzasHeroes[FuerzasHeroes["Flash"] = 5] = "Flash";
        FuerzasHeroes[FuerzasHeroes["Superman"] = 100] = "Superman";
        FuerzasHeroes[FuerzasHeroes["Batman"] = 1] = "Batman";
        FuerzasHeroes[FuerzasHeroes["Acuaman"] = 0] = "Acuaman";
    })(FuerzasHeroes || (FuerzasHeroes = {}));
    //Enumeraciones
    const fuerzaFlash = FuerzasHeroes.Flash;
    const fuerzaSuperman = FuerzasHeroes.Superman;
    const fuerzaBatman = FuerzasHeroes.Batman;
    const fuerzaAcuaman = FuerzasHeroes.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
})();
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
//# sourceMappingURL=main.js.map