(() => {

  const fullName = (firstName: string, lastName?  : string, upperCase: boolean = false): string => {

    if (upperCase) {
      return `${firstName} ${lastName || ''}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || ''}`
    }
  }

  const name = fullName('Tony')
  console.log( {name});
  
  
}
)()