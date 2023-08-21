(() => {

  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number):void;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {

    constructor(public age:number, public name:string, public realName: string) {

    }

    mutantPower(id: number): void {
        console.log(`I am a mutant ${id}`);
    }
  }

})()