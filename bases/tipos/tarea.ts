(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman,superman];
  const villano: [string, number, boolean] = ['Lex Lutor',5,true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

  enum FuerzasHeroes {
    Flash = 5,
    Superman= 100,
    Batman= 1,
    Acuaman= 0
  }

  //Enumeraciones
  const fuerzaFlash = FuerzasHeroes.Flash;
  const fuerzaSuperman = FuerzasHeroes.Superman;
  const fuerzaBatman = FuerzasHeroes.Batman;
  const fuerzaAcuaman = FuerzasHeroes.Acuaman;

  // Retorno de funciones
  function activar_batiseñal():string {
    return 'activada';
  }

  function pedir_ayuda():void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder:number = (poder as string).length;
  console.log( largoDelPoder );


})()

