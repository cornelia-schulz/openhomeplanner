import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Region } from './model';
import { District } from './model';
import { Suburb } from './model';
import { SearchCriteria } from './model';
import { DataService } from './data.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { IMyOptions } from 'mydatepicker';
import { IMyDateModel } from 'mydatepicker';
import { DisplayResultBoxComponent } from './display-result-box.component';

@Component({
    moduleId: module.id,
    selector: 'search-box',
    outputs: ['setSearch', 'setRegions'],
    templateUrl: './search-box.component.html',
    styleUrls: ['search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
    regions: Region[];
    region: Region;
    districts: District[];
    district: District;
    suburbs: Suburb[];
    suburb: Suburb;
    selectedRegion = null;
    selectedDistrict = null;
    selectedSuburbs: number[];
    suburbOptions: IMultiSelectOption[];
    districtsDisabled: boolean;
    suburbsDisabled: boolean;

    any: any;
    bedroomOptions: string[];
    minBedrooms: string;
    maxBedrooms: string;
    bathroomOptions: string[];
    minBathrooms: string;
    maxBathrooms: string;
    priceOptions: number[];
    minPrice: string;
    maxPrice: string;

    propertyTypeOptions: IMultiSelectOption[];
    selectedPropertyTypes: number[];
    today = new Date();
    currentYear = this.today.getFullYear();
    currentMonth = this.today.getMonth() + 1;
    currentDay = this.today.getDate();
    selectedDate: any;
    public setSearch: EventEmitter<any> = new EventEmitter();
    public setRegions: EventEmitter<any> = new EventEmitter();

    constructor(private dataService: DataService,
                private router: Router) {

    }

    // style suburb list
    suburbTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Deselect all',
        checked: 'suburb selected',
        checkedPlural: 'suburbs selected',
        defaultTitle: 'Select a Suburb',
        allSelected: 'All selected'
    };
    suburbListSettings: IMultiSelectSettings = {
        enableSearch: true,
        buttonClasses: 'btn btn-primary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: false
    }

    ngOnInit() {
        this.getRegions();
        this.suburbOptions = [];
        this.districtsDisabled = true;
        this.suburbsDisabled = true;

        this.bedroomOptions = ['Any', '1', '2', '3', '4', '5', '6+'];
        this.bathroomOptions = ['Any', '1', '2', '3', '4', '5', '6+'];
        this.priceOptions = [100000, 150000, 200000, 250000, 300000,
            350000, 400000, 450000, 500000, 550000,
            600000, 650000, 700000, 750000, 800000,
            850000, 900000, 950000, 1000000, 1500000,
            2500000, 3000000];
        this.minBedrooms = 'Any';
        this.maxBedrooms = 'Any';
        this.minBathrooms = 'Any';
        this.maxBathrooms = 'Any';
        this.minPrice = 'Any';
        this.maxPrice = 'Any';
        this.selectedDate = { year: this.currentYear, month: this.currentMonth, day: this.currentDay };


        this.propertyTypeOptions = [{ id: 1, name: 'Apartment' },
        { id: 2, name: 'House' },
        { id: 3, name: 'Lifestyle bare land' },
        { id: 4, name: 'Lifestyle dwelling' },
        { id: 5, name: 'Section' },
        { id: 6, name: 'Townhouse' },
        { id: 7, name: 'Unit' }];
    }

    getRegions() {
        this.dataService.getRegions().subscribe(regs => {
            this.regions = regs;
            this.setRegions.emit(this.regions);
        }, (errorMsg: string) => {
            alert(errorMsg);
        });
    }

    getDistricts(event: Event): void {
        this.region = this.selectedRegion;
        this.districts = this.region.districts;
        this.districtsDisabled = false;
    }

    getSuburbs(event: Event): void {
        this.district = this.selectedDistrict;
        this.suburbs = this.district.suburbs;

        for (var i = 0; i < this.suburbs.length; i++) {
            this.suburbOptions.push({ id: i, name: this.suburbs[i].name })
        }
        this.suburbsDisabled = false;
    }

    getSelectedSuburbs(event: Event) {
        for (var i = 0; i < this.selectedSuburbs.length; i++) {
            //console.log(this.selectedSuburbs[i]);
        }
    }


    propertyTypeTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Deselect all',
        checked: 'property type selected',
        checkedPlural: 'property types selected',
        defaultTitle: 'Select a Property Type',
        allSelected: 'All selected'
    };
    propertyTypeListSettings: IMultiSelectSettings = {
        enableSearch: false,
        buttonClasses: 'btn btn-primary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    }

    public myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd/mm/yyyy'
    }

    public model: Object = { date: { year: this.currentYear, month: this.currentMonth, day: this.currentDay } };

    onDateChanged(event: IMyDateModel) {
        this.selectedDate = event.date;
        //this.setDate.emit(this.selectedDate);
        //return this.selectedDate;
    }

    onSearch(event: Event) {
        if (this.selectedSuburbs === undefined || this.selectedPropertyTypes === undefined) {
            alert("Please make sure you have selected at least one suburb and at least one property type.");
        }
        else {
            let searchCriteria = {
                minBedrooms: this.minBedrooms,
                maxBedrooms: this.maxBedrooms,
                minPrice: this.minPrice,
                maxPrice: this.maxPrice,
                openHomeDate: this.selectedDate.day+"-"+this.selectedDate.month+"-"+this.selectedDate.year,
                propertyType: this.selectedPropertyTypes,
                region: this.selectedRegion.name,
                district: this.selectedDistrict.name,
                suburb: this.selectedSuburbs,
                minBathrooms: this.minBathrooms,
                maxBathrooms: this.maxBathrooms
            }

            if(searchCriteria.minBedrooms == 'any') searchCriteria.minBedrooms 
            // this.setSearch.emit(this.searchCriteria);
            console.log("log date:");
            console.log(searchCriteria.district);
            this.router.navigate(['/test/results', searchCriteria]);
        }

    }


}