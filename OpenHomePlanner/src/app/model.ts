export class Region {
  id: number;
  name: string;
  district: District[];
}

export class District {
  name: string;
  suburb: Suburb[];
}

export class Suburb {
  name: string;
}

export class Address {
  id: number;
  street: string;
  city: string;
  postcode: number;
  suburb: string;
}