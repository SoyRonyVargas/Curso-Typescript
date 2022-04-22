"use strict";
(function () {
    // Tipos
    var superman = 'Clark';
    var batman = 'Bruce';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["superman"] = 100] = "superman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.flash;
    var fuerzaSuperman = Fuerza.superman;
    var fuerzaBatman = Fuerza.batman;
    var fuerzaAcuaman = Fuerza.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
    var vacio = undefined;
})();
