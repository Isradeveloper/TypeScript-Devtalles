(() => {

  // LAS CLASES ABSTRACTAS NO SIRVEN PARA CREAR INSTANCIAS. SIRVEN PARA CREAR OTRAS CLASES QUE EXTIENDAN
  // DE ESTAS Y ASÍ PODER, IMPLEMENTAR ATRIBUTOS Y MÉTODOS. IMPLEMENTANDO LAS CARACTERISTICAS DE LA CLASE
  // ABSTRACTA

  abstract class Mutante {

    constructor(
      public name:string,
      public realName: string
    ) {}

  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo salvado!';
    }  
  }

  class Villain extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado!';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan')
  const magneto = new Villain('Magneto', 'Magnus')

  // console.log(magneto.conquistarMundo());



  const printName = (character: Mutante) => {
    console.log(character.name);
  }

  // printName(magneto)
  
  

})()