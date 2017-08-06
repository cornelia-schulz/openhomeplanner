using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OpenHomePlanner.Models
{
    public class SearchCriteria
    {
        public int? MinBedrooms { get; set; }
        public int? MaxBedrooms { get; set; }
        public int? MinBathrooms { get; set; }
        public int? MaxBathrooms { get; set; }
        public decimal? MinPrice { get; set; }
        public DateTime? OpenHomeDate { get; set; }
        public string Suburb { get; set; }
        public string City { get; set; }
        public decimal? MaxPrice { get; internal set; }
    }
}