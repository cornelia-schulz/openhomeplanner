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
        this.getProperties();
        this.searchCriteria = new SearchCriteria();
        let params = this.route.snapshot.params;
        console.log(params);
        this.searchCriteria.suburb = params.suburb

        // console.log("searchCriteria:");
        // console.log(this.searchCriteria);
        //  console.log(this.searchCriteria.region);
        //  this.region = this.searchCriteria.region;
        //  console.log(this.region.name);
        // console.log("result regions:");
        // console.log(this.regions);
        // console.log(this.regions[0].district);
        // console.log(this.regions[0].name);

        this.getPropertiesThatMatchSearchCriteria();
    }

    getProperties() {
        this.dataService.getProperties().subscribe(props => {
            this.properties = props;
            console.log("properties")
            console.log(this.properties);
            this.properties.sort(function (a, b) {
                if (a.openHomeFromTime < b.openHomeFromTime) {
                    return -1;
                }
                else if (a.openHomeFromTime > b.openHomeFromTime) {
                    return 1;
                }
                else return 0;
            })
            return this.properties;
        }, (errorMsg: string) => {
            alert(errorMsg);
        });
    }



    getPropertiesThatMatchSearchCriteria() {
        this.getProperties();
        for (var i = 0; i < this.properties.length; i++) {
            this.searchCriteria.region;
            for (var j = 0; j < this.searchCriteria.region.length; j++) {
                if (this.region.name === this.properties[i].address.city) {
                    this.filteredProperties.push(this.properties[i]);
                }
            }

        }
        this.filteredProperties = this.properties;
        console.log("Filtered Properties:")
        console.log(this.filteredProperties);
    }

    removePropertyfromList() {

    }

}