import powers from "../data/powers"

export class Hero {

  constructor(
    public name:string,
    public powerId: number,
    public age: number
  ){}

  // Se busca el objeto y luego se retorna su atributo descripcion, con ? se valida que si no viene Coloque not found con ||
  get power(): string {
    return powers.find(power => power.id === this.powerId)?.descripcion || "Not found"
  }


}