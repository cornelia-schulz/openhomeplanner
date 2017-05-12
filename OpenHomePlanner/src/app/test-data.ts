
export function createTestRegions(){
    return [
        {
    id: 1,
    name: 'Auckland',
    district : [
      {
        name: 'Manukau City',
        suburb : [
          {name: 'Howick'},
          {name: 'Beachlands'},
          {name: 'Clevedon'},
          {name: 'Cockle Bay'}
        ]
      },
      {
        name: 'Franklin',
        suburb: [
          {name: 'Buckland'},
          {name: 'Clarks Beach'},
          {name: 'Hunua'}
        ]
      },
      {
        name: 'Auckland City',
        suburb: [
          {name: 'City Centre'},
          {name: 'Epsom'},
          {name: 'Freemans Bay'}
        ]
      }
    ]
  },
{
    id: 2,
    name: 'Wellington',
    district : [
      {
        name: 'Upper Hut',
        suburb : [
          {name: 'Rimutaka'},
          {name: 'Birchville'},
          {name: 'Mangaroa'},
          {name: 'Pinehaven'}
        ]
      },
      {
        name: 'Lower Hutt',
        suburb: [
          {name: 'Petone'},
          {name: 'Kelson'},
          {name: 'Fairfield'}
        ]
      },
      {
        name: 'Wellington City',
        suburb: [
          {name: 'City Centre'},
          {name: 'Mt Victoria'},
          {name: 'Newtown'}
        ]
      }
    ]
  }

    ];
}

/*export function createTestAddresses(){
    return [
        {} ]*/