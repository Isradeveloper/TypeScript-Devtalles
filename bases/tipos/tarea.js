"use strict";
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
