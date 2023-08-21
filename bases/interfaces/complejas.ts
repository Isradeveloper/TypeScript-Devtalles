(() => {

  interface Client {
    name: string;
    age?: number;
    address : Address;

    getFullAddress (id: string):void
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Fernando',
    age: 25,
    address: {
      id: 125,
      zip: 'KYZ SUD',
      city: 'Ottawa '
    },
    getFullAddress(id: string) {
      return this.address.city
    }
  }

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    address: {
      city: 'Toronto',
      id: 120,
      zip: 'KYZX 332'
    },
    getFullAddress(id: string) {
      return this.address.city
    }
  }

})