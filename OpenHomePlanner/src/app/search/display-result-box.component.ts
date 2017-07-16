import { Component, Input, Output, EventEmitter, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from './data.service';
import { Property } from './model';
import { SearchCriteria, Region, District, Suburb } from './model';


@Component({
    moduleId: module.id,
    selector: 'display-result-box',
    templateUrl: './display-result-box.component.html',
    styleUrls: ['display-result-box.component.css']
})

export class DisplayResultBoxComponent implements OnInit {
    properties: Property[];
    title = "Open Homes scheduled for ";
    public selectedDate: any;
    public searchCriteria: SearchCriteria;
    filteredProperties: Property[];
    today = new Date();
    public regions: Region[];
    public districts: District[];
    public suburbs: Suburb[];
    region: any;


    get dateText(): string {
        if (this.selectedDate) {
            return this.selectedDate.day + '/' + this.selectedDate.month + '/' + this.selectedDate.year;
        }
        return "";
    }

    constructor(private dataService: DataService, private route: ActivatedRoute) { }
    ngOnInit() {
        this.properties = [];
        let params = this.route.snapshot.params;
        this.searchCriteria = new SearchCriteria();
        this.searchCriteria.suburb = params.suburb;
        this.searchCriteria.district = params.district.split(',');
        this.searchCriteria.region = params.region.split(',');
        this.searchCriteria.minBathrooms = params.minBathrooms;
        this.searchCriteria.minBedrooms = params.minBedrooms;
        this.searchCriteria.minPrice = params.minPrice;
        this.searchCriteria.maxBathrooms = params.maxBathrooms;
        this.searchCriteria.maxBedrooms = params.maxBedrooms;
        this.searchCriteria.maxPrice = params.maxPrice;
        this.searchCriteria.openHomeDate = params.openHomeDate;
        console.log(this.searchCriteria.openHomeDate);

        this.getProperties();
        


    }

    getProperties(): Property[] {
        this.dataService.getProperties().subscribe(props => {
            this.properties = this.getPropertiesThatMatchSearchCriteria(props);

            this.properties.sort(function (a, b) {
                if (a.openHomeFromTime < b.openHomeFromTime) {
                    return 1;
                }
                else if (a.openHomeFromTime > b.openHomeFromTime) {
                    return -1;
                }
                else return 0;
            });

        }, (errorMsg: string) => {
            alert(errorMsg);
        });
        return this.properties;
    }

    getPropertiesThatMatchSearchCriteria(properties: Property[]): Property[] {
        //this.getProperties();
        console.log('properties : ' + properties.length);
        var filteredProperties = [];
        for (var i = 0; i < properties.length; i++) {
            for (var j = 0; j < this.searchCriteria.region.length; j++) {
                let region = this.searchCriteria.region[j];
                if (region == properties[i].address.city) {
                    filteredProperties.push(properties[i]);
                }
            }

        }
        return filteredProperties;
    }

    removePropertyfromList() {
        //not sure yet
    }
}