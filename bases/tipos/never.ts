(() => {

  // Se utiliza never cuando la función no debe completarse correctamente. (Errores o reventar)
  const error = (message: string):(never | number) => {
    if (false) {
      throw new Error(message);
    }

    return 1
  }

  error('Auxilio!');

})