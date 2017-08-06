using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using OpenHomePlanner.Models;
using System;
using OpenHomePlanner.Utilities;

namespace OpenHomePlanner.Controllers
{
    public class ApiController : Controller
    {
        private IList<Listing> Listings = new List<Listing>()
        {
          new Listing() {
              Id = 1,
              Bedrooms = 3,
              Bathrooms = 1,
              Price = 1655697,
              OpenHomeFromTime = new DateTime(2017, 08, 23, 14, 00, 00),
              OpenHomeToTime = new DateTime(2017, 08, 23, 15, 00, 00),
              OpenHomeDate = new DateTime(2017,08, 23),
              Address = new Address()
              {
                  City = "Auckland",
                  Street = "12 Smith Street",
                  Postcode = 2015,
                  Suburb = "Beachlands"
              },
              Image= "/images/house0.jpg",
              Title= "Beautiful house",
              Description= "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          },
          new Listing()
          {
              Id = 2,
              Bedrooms = 3,
              Bathrooms = 2,
              Price = 345697,
              OpenHomeFromTime = new DateTime(2017, 09, 13, 12, 00, 00),
              OpenHomeToTime = new DateTime(2017, 09, 13, 12, 30, 00),
              OpenHomeDate = new DateTime(2017, 09, 13),
              Address = new Address()
              {
                  City = "Wellington",
                  Street = "2 Hanson Street",
                  Postcode = 1423,
                  Suburb = "Newtown"
              },
              Image= "/images/house1.jpg",
              Title = "Something Something house",
              Description= "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          },
          new Listing()
          {
              Id= 3,
              Bedrooms = 3,
              Bathrooms = 2,
              Price = 897697,
              OpenHomeFromTime = new DateTime(2017, 08, 25, 15, 15, 00),
              OpenHomeToTime = new DateTime(2017, 08, 25, 15, 45, 00),
              OpenHomeDate = new DateTime(2017, 08, 25),
              Address = new Address()
              {
                  City = "Auckland",
                  Street = "123 Queen Street",
                  Postcode = 2010,
                  Suburb = "City Centre"
              },
              Image = "/images/house2.jpg",
              Title = "Magnificent house",
              Description = "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          },
          new Listing()
          {
              Id= 4,
              Bedrooms = 2,
              Bathrooms = 1,
              Price = 797697,
              OpenHomeFromTime = new DateTime(2017, 09, 05, 15, 30, 00),
              OpenHomeToTime = new DateTime(2017, 09, 05, 16, 00, 00),
              OpenHomeDate = new DateTime(2017, 09, 05),
              Address = new Address()
              {
                  City = "Auckland",
                  Street = "163 Queen Street",
                  Postcode = 2010,
                  Suburb = "City Centre",
              },
              Image = "/images/house2.jpg",
              Title = "Superb house",
              Description = "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          },     
          new Listing()
          {
              Id= 5,
              Bedrooms = 3,
              Bathrooms = 3,
              Price = 997697,
              OpenHomeFromTime = new DateTime(2017, 12, 12, 13, 10, 00),
              OpenHomeToTime = new DateTime(2017, 12, 12, 13, 40, 00),
              OpenHomeDate = new DateTime(2017, 12, 12),
              Address = new Address()
              {
                  City = "Wellington",
                  Street = "12 Queen Street",
                  Postcode = 1213,
                  Suburb = "Petone",
              },
              Image = "/images/house1.jpg",
              Title = "Yabadabadoo house",
              Description = "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          },
          new Listing()
          {
              Id= 6,
              Bedrooms = 2,
              Bathrooms = 2,
              Price = 997697,
              OpenHomeFromTime = new DateTime(2017, 12, 12, 16, 15, 00),
              OpenHomeToTime = new DateTime(2017, 12, 12, 16, 45, 00),
              OpenHomeDate = new DateTime(2017,12,12),
              Address = new Address()
              {
                  City = "Auckland",
                  Street = "13 Smith Street",
                  Postcode = 2014,
                  Suburb = "Howick",
              },
              Image = "/images/house0.jpg",
              Title = "Flower house",
              Description = "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          },
          new Listing()
          {
              Id= 7,
              Bedrooms = 5,
              Bathrooms = 4,
              Price = 879654,
              OpenHomeFromTime = new DateTime(2017, 11, 12, 13, 00, 00),
              OpenHomeToTime = new DateTime(2017, 11, 12, 13, 30, 00),
              OpenHomeDate = new DateTime(2017, 11, 12),
              Address = new Address()
              {
                  City = "Wellington",
                  Street = "231 Queen Street",
                  Postcode = 1212,
                  Suburb = "Rimutaka",
              },
              Image = "/images/house2.jpg",
              Title = "Yummy house",
              Description = "Lorem Ipsum Housum Lorem Ipsum HousumLorem Ipsum HousumLorem Ipsum Housum"
          }
    };



        [HttpGet]
        public JsonNetResult Search(SearchCriteria searchCriteria)
        {
            int minBedrooms = 0, minBathrooms = 0, maxBedrooms = 100, maxBathrooms = 100;
            decimal minPrice = 0, maxPrice = decimal.MaxValue;
            DateTime minDate = DateTime.Now.Date;
            DateTime maxDate = DateTime.Now.AddMonths(12).Date;

            if (searchCriteria.MinBedrooms.HasValue) minBedrooms = searchCriteria.MinBedrooms.Value;
            if (searchCriteria.MaxBedrooms.HasValue) maxBedrooms = searchCriteria.MaxBedrooms.Value;
            if (searchCriteria.MinBathrooms.HasValue) minBathrooms = searchCriteria.MinBathrooms.Value;
            if (searchCriteria.MaxBathrooms.HasValue) maxBathrooms = searchCriteria.MaxBathrooms.Value;
            if (searchCriteria.MinPrice.HasValue) minPrice = searchCriteria.MinPrice.Value;
            if (searchCriteria.MaxPrice.HasValue) minPrice = searchCriteria.MaxPrice.Value;

            if (searchCriteria.OpenHomeDate.HasValue)
            {
                maxDate = minDate = searchCriteria.OpenHomeDate.Value.Date;
            }

            var listings = Listings.Where(a => a.Bedrooms >= minBedrooms && a.Bedrooms <= maxBedrooms &&
                                            a.Bathrooms >= minBathrooms && a.Bathrooms <= maxBathrooms &&
                                            a.Price >= minPrice && a.Price <= maxPrice &&
                                            a.OpenHomeFromTime.Date >= minDate && a.OpenHomeToTime.Date <= maxDate &&
                                            (string.IsNullOrEmpty(searchCriteria.Suburb) ||
                                                a.Address.Suburb.IndexOf(searchCriteria.Suburb, StringComparison.OrdinalIgnoreCase) > -1) &&
                                            (string.IsNullOrEmpty(searchCriteria.City) ||
                                                a.Address.City.IndexOf(searchCriteria.City, StringComparison.OrdinalIgnoreCase) > -1)
                                            );

            return new JsonNetResult()
            {
                Data = new { Data = listings },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }


        //      [
        //  {
        //    id: 1,
        //    name: 'Auckland',
        //    district: [
        //      {
        //        name: 'Manukau City',
        //        suburb: [
        //          { name: 'Howick' },
        //          { name: 'Beachlands' },
        //          { name: 'Clevedon' },
        //          { name: 'Cockle Bay' }
        //        ]
        //      },
        //      {
        //        name: 'Franklin',
        //        suburb: [
        //          { name: 'Buckland' },
        //          { name: 'Clarks Beach' },
        //          { name: 'Hunua' }
        //        ]
        //      },
        //      {
        //        name: 'Auckland City',
        //        suburb: [
        //          { name: 'City Centre' },
        //          { name: 'Epsom' },
        //          { name: 'Freemans Bay' }
        //        ]
        //      }
        //    ]
        //  },
        //  {
        //    id: 2,
        //    name: 'Wellington',
        //    district: [
        //      {
        //        name: 'Upper Hut',
        //        suburb: [
        //          { name: 'Rimutaka' },
        //          { name: 'Birchville' },
        //          { name: 'Mangaroa' },
        //          { name: 'Pinehaven' }
        //        ]
        //      },
        //      {
        //        name: 'Lower Hutt',
        //        suburb: [
        //          { name: 'Petone' },
        //          { name: 'Kelson' },
        //          { name: 'Fairfield' }
        //        ]
        //      },
        //      {
        //        name: 'Wellington City',
        //        suburb: [
        //          { name: 'City Centre' },
        //          { name: 'Mt Victoria' },
        //          { name: 'Newtown' }
        //        ]
        //      }
        //    ]
        //  }
        //]
        [HttpGet]
        public JsonResult Regions()
        {
            IEnumerable<Region> regions = new List<Region>() {
            new Region() { Id=1, Name = "Auckland", Districts = new List<District>() {
                new District()
                {
                    Name = "Manukau City",
                    Suburbs = new List<Suburb>()
                    {
                        new Suburb() { Name = "Howick" },
                        new Suburb() { Name = "Beachlands" },
                        new Suburb() { Name = "Clevedon" },
                        new Suburb() { Name = "Cockle Bay" },
                    }
                },
                new District()
                {
                    Name = "Franklin",
                    Suburbs = new List<Suburb>()
                    {
                        new Suburb() { Name = "Buckland" },
                        new Suburb() { Name = "Clarks Beach" },
                        new Suburb() { Name = "Hunua" }
                    }
                },
                new District()
                {
                    Name = "Auckland City",
                    Suburbs = new List<Suburb>()
                    {
                        new Suburb() { Name = "City Centre" },
                        new Suburb() { Name = "Epsom" },
                        new Suburb() { Name = "Freemans Bay" }
                    }
                }

            }

            },
            new Region(){ Id = 2, Name = "Wellington", Districts = new List<District>()
            {
                new District()
                {
                    Name =  "Lower Hutt",
                    Suburbs = new List<Suburb>()
                    {
                        new Suburb() { Name = "Petone" },
                        new Suburb() { Name = "Kelson" },
                        new Suburb() { Name = "Fairfield" }
                    }
                },
                new District()
                {
                    Name = "Upper Hutt",
                    Suburbs = new List<Suburb>()
                    {
                        new Suburb() { Name = "Rimutaka" },
                        new Suburb() { Name = "Birchville" },
                        new Suburb() { Name = "Mangaroa" },
                        new Suburb() { Name = "Pinehaven" }
                    }
                },
                new District()
                {
                    Name = "Wellington City",
                    Suburbs = new List<Suburb>()
                    {
                        new Suburb() { Name = "City Centre" },
                        new Suburb() { Name = "Mt Victoria" },
                        new Suburb() { Name = "Newtown" }
                    }
                }
            } }
    };
            return new JsonNetResult()
            {
                Data = new { Data = regions },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };

        }

    }
}