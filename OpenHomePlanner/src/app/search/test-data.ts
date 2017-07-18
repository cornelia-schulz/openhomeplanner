
export function createTestRegions() {
  return [
    {
      id: 1,
      name: 'Auckland',
      district: [
        {
          name: 'Manukau City',
          suburb: [
            { name: 'Howick' },
            { name: 'Beachlands' },
            { name: 'Clevedon' },
            { name: 'Cockle Bay' }
          ]
        },
        {
          name: 'Franklin',
          suburb: [
            { name: 'Buckland' },
            { name: 'Clarks Beach' },
            { name: 'Hunua' }
          ]
        },
        {
          name: 'Auckland City',
          suburb: [
            { name: 'City Centre' },
            { name: 'Epsom' },
            { name: 'Freemans Bay' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Wellington',
      district: [
        {
          name: 'Upper Hut',
          suburb: [
            { name: 'Rimutaka' },
            { name: 'Birchville' },
            { name: 'Mangaroa' },
            { name: 'Pinehaven' }
          ]
        },
        {
          name: 'Lower Hutt',
          suburb: [
            { name: 'Petone' },
            { name: 'Kelson' },
            { name: 'Fairfield' }
          ]
        },
        {
          name: 'Wellington City',
          suburb: [
            { name: 'City Centre' },
            { name: 'Mt Victoria' },
            { name: 'Newtown' }
          ]
        }
      ]
    }
  ]
}

export function createTestProperties() {
  return [
    {
      id: 1,
      bedrooms: 3,
      bathrooms: 1,
      price: 1655697,
      address: {
        street: '12 Smith Street',
        city: 'Auckland',
        postcode: 2015,
        region: {
          name: 'Manukau City',
          suburb: { name: 'Beachlands' }
        },
        suburb: {
          name: 'Beachlands'
        }
      },
      openHomeFromTime: 'Tue May 23 2017 14:10:12 GMT+1200',
      openHomeToTime: 'Tue May 23 2017 14:40:12 GMT+1200',
      openHomeDate: 'Tue May 23 2017 15:18:12 GMT+1200',
      image: '/images/house0.jpg',
      title: 'Beautiful house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    },
    {
      id: 2,
      bedrooms: 3,
      bathrooms: 1,
      price: 345697,
      address: {
        street: '2 Hanson Street',
        city: 'Wellington',
        postcode: 2015,
        suburb: {
          name: 'Newtown'
        }
      },
      openHomeFromTime: 'Tue May 23 2017 12:00:12 GMT+1200',
      openHomeToTime: 'Tue May 23 2017 12:30:12 GMT+1200',
      openHomeDate: 'Tue May 23 2017 15:18:12 GMT+1200',
      image: '/images/house1.jpg',
      title: 'Something Something house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    },
    {
      id: 3,
      bedrooms: 3,
      bathrooms: 2,
      price: 897697,
      address: {
        street: '123 Queen Street',
        city: 'Auckland',
        postcode: 2010,
        suburb: {
          name: 'City Centre'
        }
      },
      openHomeFromTime: 'Tue May 23 2017 15:18:12 GMT+1200',
      openHomeToTime: 'Tue May 23 2017 15:48:12 GMT+1200',
      openHomeDate: 'Tue May 23 2017 15:18:12 GMT+1200',
      image: '/images/house2.jpg',
      title: 'Magnificent house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    },
    {
      id: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 797697,
      address: {
        street: '163 Queen Street',
        city: 'Auckland',
        postcode: 2010,
        suburb: {
          name: 'City Centre'
        }
      },
      openHomeFromTime: 'Wed May 24 2017 15:18:12 GMT+1200',
      openHomeToTime: 'Wed May 24 2017 15:48:12 GMT+1200',
      openHomeDate: 'Tue May 23 2017 15:18:12 GMT+1200',
      image: '/images/house2.jpg',
      title: 'Superb house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    },
    {
      id: 5,
      bedrooms: 3,
      bathrooms: 3,
      price: 997697,
      address: {
        street: '12 Queen Street',
        city: 'Auckland',
        postcode: 2010,
        suburb: {
          name: 'City Centre'
        }
      },
      openHomeFromTime: 'Tue Dec 12 2017 15:18:12 GMT+1200',
      openHomeToTime: 'Tue Dec 12 2017 15:48:12 GMT+1200',
      openHomeDate: 'Tue Dec 12 2017 15:18:12 GMT+1200',
      image: '/images/house2.jpg',
      title: 'Yabadabadoo house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    },
    {
      id: 6,
      bedrooms: 2,
      bathrooms: 2,
      price: 997697,
      address: {
        street: '13 Queen Street',
        city: 'Auckland',
        postcode: 2010,
        suburb: {
          name: 'City Centre'
        }
      },
      openHomeFromTime: 'Tue Dec 12 2017 16:18:12 GMT+1200',
      openHomeToTime: 'Tue Dec 12 2017 16:48:12 GMT+1200',
      openHomeDate: 'Tue Dec 12 2017 16:18:12 GMT+1200',
      image: '/images/house2.jpg',
      title: 'Flower house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    },
    {
      id: 7,
      bedrooms: 5,
      bathrooms: 4,
      price: 897697,
      address: {
        street: '323 Queen Street',
        city: 'Auckland',
        postcode: 2010,
        suburb: {
          name: 'City Centre'
        }
      },
      openHomeFromTime: 'Tue Dec 12 2017 15:18:12 GMT+1200',
      openHomeToTime: 'Tue Dec 12 2017 15:48:12 GMT+1200',
      openHomeDate: 'Tue Dec 12 2017 15:18:12 GMT+1200',
      image: '/images/house2.jpg',
      title: 'Yummy house',
      description: 'Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum'
    }
  ]
};