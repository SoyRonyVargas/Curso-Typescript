// Funciones Básicas

type Arreglo = string[]

const sumar = ( a : number , b : number ) : number => a + b

const contar = ( heroes : Arreglo ) : number => heroes.length;

const superHeroes: Arreglo = ["Flash", "Arrow", "Superman", "Linterna Verde"];

contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar : boolean = true ) : void => {
  if( llamar )
  {
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas: Arreglo ) : string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero : number, texto : string , booleano : boolean, arreglo: any[] ) : void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"

let noHaceNadaTampoco : Function;

noHaceNadaTampoco = noHaceNada
