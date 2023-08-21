(()=>{

  /*
    SE UTILIZA PARA RETORNAR LA INSTANCIA QUE SE CREÓ POR PRIMERA Y ÚNICA VEZ
  */

  class Apocalipsis {

    static instance:Apocalipsis;

    private constructor(public name:string) {

    }

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        // Si no existe instancia, la crea y la almacena en el atributo estático de clase
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el único')
      }

      return Apocalipsis.instance
    }

    changeName(newName:string):void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis()
  const apocalipsis2 = Apocalipsis.callApocalipsis()
  const apocalipsis3 = Apocalipsis.callApocalipsis()

  apocalipsis1.changeName('X')

  // console.log(apocalipsis1);
  // console.log(apocalipsis2);
  // console.log(apocalipsis3);
  

})()