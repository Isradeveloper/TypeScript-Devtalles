(() => {

  // PRIVATE: SOLO SE UTILIZA PARA MANEJO INTERNO DE LA CLASE
  // PROTECTED: PERMITE UTILIZAR ATRIBUTOS Y METODOS DENTRO DE LA CLASE E HIJOS
  // PUBLIC: PERMITE ACCEDER DESDE CUALQUIER LUGAR

  class Avenger {

    constructor(
      public name: string,
      public realName: string = 'Desconocido'
    ) {
      // console.log('Contructor Avenger llamado!');
      
    }

    protected getFullName() {
      return `${this.name} - ${this.realName}`;
    }

  }

  class Xmen extends Avenger {

    constructor(
      // PADRE
      name: string,
      realName: string = 'Desconocido',
      public isMutant: boolean
    ){
        super(name, realName)
        // console.log('Constructor Xmen llamado!');
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }



    getFullNameDesdeXmen ():string {
      return super.getFullName()
    }

    set fullName(name:string) {
      
      if (name.length < 3) {
        throw new Error('El nombre debe tener más de 3 letras.')
      }

      this.name = name

    }

  }

  // const wolverine = new Xmen('Wolverine',undefined,true)
  const wolverine = new Xmen('Wolverine','Logan',true)

  wolverine.fullName = 'Isra'
  // console.log(wolverine.fullName);
  

})()