// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";

import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject( { a:1, b:2, c:3 } );
// printObject( [ 1, 2, 3 ] );
// printObject("121313");

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction("3.1416").length);

const deadPool = {
  name:"Deadpool",
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadPool) );
