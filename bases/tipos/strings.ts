(() => {

  const batman: string = 'Batman';
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcan Negro`;

  const abc = 123;

  console.log(`I'm ${batman} , ${abc.toString()}`);

  // Si existe un valor en la posición 10 lo convierte en mayúsculas, si no. Printea "No está presente"
  console.log(batman[10]?.toUpperCase() || 'No está presente');
  
})()