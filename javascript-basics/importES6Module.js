import coffeeStock from "./moduleES6Example.js";
import {coffeeStock as kopi,isCoffeeMachineReady as ready} from "./moduleES6Example_many.js";

console.log(coffeeStock)
console.log(kopi, ready)

// will throw an error because we not activate package json type yet
// set type= module