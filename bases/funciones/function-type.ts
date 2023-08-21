(() => {

  const addNumbers = (a:number, b:number): number =>  a + b;

  const greet = (name:string):string => `Hola ${name}`;

  const saveTheWorld = (): string  => 'El mundo está salvado!';

  let myFunction: Function;

  // let myFunction: (y: number, z: number) => number;
   // let myFunction: () => void;

  myFunction = addNumbers
  console.log(myFunction(1, 3));

  myFunction = greet
  console.log(myFunction('Isra'));

  myFunction = saveTheWorld
  console.log(myFunction(

  ));
  

})()