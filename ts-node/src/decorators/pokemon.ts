// ESTE DECORADOR SOLAMENTE EJECUTA EL PRINT TO CONSOLE UNA VEZ (EN LA TRANSPILACION)
// EN LAS DEMAS OCASIONES NO 


// DECORADOR ES UNA FUNCION

// FACTORY DECORATOR - RETORNA UNA FUNCION

function printToConsole( constructor:Function ) {
  console.log(constructor);
}

// FACTORY DECORATOR - RETORNA FUNCION
const printToConsoleConditional = ( print: boolean = false ): Function => {

  if (print) {
    return printToConsole;
  } else {
    return () => {}
  }

}

const bloquearPrototipo = function ( constructor:Function ) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

// DECORADOR DE METODOS
function checkValidPokemonId () {
  return function( target:any, propertyKey: string, descriptor: PropertyDescriptor ) {
    console.log({target, propertyKey, descriptor});

    const originalMethod = descriptor.value;

    descriptor.value = (id:number) => {
      if (id < 1 || id > 800) {
        return console.error('El ID del pokemón debe estar entre 1 y 800')
      } else {
        return originalMethod(id)
      }
    }
  }
}


// DECORADOR DE PROPIEDADES
function readOnly(isWritable: boolean = true): Function {
  return function(target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return 'Fernando'
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }
    return descriptor
  }
}


@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

  @readOnly(false)
  public publicApi: string = "https://pokeapi.co/api/v2/"

  constructor(
    public name: string,

  ){}

  @checkValidPokemonId()
  savePokemonToDb(id:number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}