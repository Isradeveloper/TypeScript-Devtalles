(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.4234
  }

  const { poder, vision } = avengers

  console.log(poder.toFixed(2), vision.toUpperCase());

  // const printAvenger = (avengers: Avengers):void => {
  //   console.log(avengers.vision); 
  // }

  const printAvenger = ({ ironman, ...resto }: Avengers):void => {
    console.log(avengers.vision); 
  }


  const avengersArr:[string, boolean, number] = ['Cap. América', true, 1055.2];

  const [, ironman] = avengersArr
  

})()