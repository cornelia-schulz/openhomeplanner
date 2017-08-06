using System.Collections.Generic;

namespace OpenHomePlanner.Models
{
    public class Region
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<District> Districts { get; set; }
    }

    public class Suburb
    {
        public string Name { get; set; }
    }

    public class District
    {
        public string Name { get; set; }
        public IEnumerable<Suburb> Suburbs { get; set; }

    }

    public class Address
    {
        public int Postcode { get; set; }
        public string Street { get; set; }
        public string Suburb { get; set; }
        public string City { get; set; }

    }
}