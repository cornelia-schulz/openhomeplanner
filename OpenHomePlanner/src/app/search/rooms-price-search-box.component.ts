import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'rooms-price-search-box',
  templateUrl: './rooms-price-search-box.component.html',
  styleUrls: ['rooms-price-search-box.component.css']
})

export class RoomsPriceSearchBoxComponent implements OnInit{
    any: any;
    bedroomOptions: string[];
    minBedrooms: string;
    maxBedrooms: string;
    bathroomOptions: string[];
    minBathrooms: string;
    maxBathrooms: string;
    priceOptions: number[];
    minPrice: number;
    maxPrice: number;

    //constructor(private dataService: DataService) {}

    ngOnInit(){
        this.bedroomOptions = ['Any', '1', '2', '3','4', '5', '6+'];
        this.bathroomOptions = ['Any', '1', '2', '3','4', '5', '6+'];
        this.priceOptions = [100000, 150000, 200000, 250000, 300000, 
                             350000, 400000, 450000, 500000, 550000, 
                             600000, 650000, 700000, 750000, 800000, 
                             850000, 900000, 950000, 1000000, 1500000, 
                             2500000, 3000000];
        this.minBedrooms = 'Any';
        this.maxBedrooms = 'Any';
    }

getMinBedrooms(event:Event){
    console.log("Min Bedrooms: " + this.minBedrooms);
    return this.minBedrooms;
}

getMaxBedrooms(event:Event){
    console.log("Max Bedrooms: " + this.maxBedrooms);
    return this.maxBedrooms;
}

getMinBathrooms(event:Event){
    console.log("Min Bathrooms: " + this.minBathrooms);
    return this.minBathrooms;
}

getMaxBathrooms(event:Event){
    console.log("Max Bathrooms: " + this.maxBathrooms);
    return this.maxBathrooms;
}

getMinPrice(event:Event){
    console.log("Min Price: " + this.minPrice);
    return this.minPrice;
}

getMaxPrice(event:Event){
    console.log("Max Price: " + this.maxPrice);
    return this.maxPrice;
}

}

