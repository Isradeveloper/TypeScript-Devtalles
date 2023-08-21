(() => {

  // class Avenger {

  //   private name: string;
  //   private team: string;
  //   public realName?: string = 'Desconocido';
  //   static avgAge: number = 35;

  //   constructor (name: string, team: string, realName?: string) {
  //     this.name = name;
  //     this.team = team;
  //     this.realName = realName || this.realName;
  //   }

  // }

  class Avenger {

    static avgAge: number = 35;

    static getAvgAge():number {
      return this.avgAge
    }
  
    constructor (
      private name: string,
      private team: string,
      public realName: string = 'Desconocido',
      // avgAge: number
      ) {
        // Avenger.avgAge = avgAge;
      }

      public bio ():string {
        return `El nombre del avenger es ${this.name} y su equipo es ${this.team}`;
      }

  }

  const antman: Avenger = new Avenger('Antman', 'Capitan');
  // console.log(antman.bio());
  

})()