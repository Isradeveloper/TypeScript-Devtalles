import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'
charmander.savePokemonToDb(3)
charmander.publicApi = '233'


console.log(charmander);
