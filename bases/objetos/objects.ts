(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: string[],
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = {
    name: 'Clark Kent',
    // age: 60,
    powers: ['Súper fuerza'],
    getName() {
        return this.name;
    },
  }

})()