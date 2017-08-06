using System;

namespace OpenHomePlanner.Models
{
  public class Listing
  {
        public string Image { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public int Bathrooms { get;  set; }
        public int Bedrooms { get; set; }
        public int Id { get; internal set; }
        public DateTime OpenHomeDate { get;  set; }
        public DateTime OpenHomeFromTime { get;  set; }
        public DateTime OpenHomeToTime { get;  set; }
        public decimal Price { get;  set; }
        public Address Address { get; set; }
    }
}