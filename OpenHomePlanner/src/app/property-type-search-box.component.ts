import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts }  from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { DataService } from './data.service';
import { IMyOptions } from 'mydatepicker';


@Component({
  moduleId: module.id,
  selector: 'property-type-search-box',
  templateUrl: './property-type-search-box.component.html',
  styleUrls: ['property-type-search-box.component.css']
})

export class PropertyTypeSearchBoxComponent implements OnInit{
    propertyTypeOptions: IMultiSelectOption[];
    selectedPropertyTypes: number[];

    //constructor(private dataService: DataService) {}
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

    private myDatePickerOptions: IMyOptions = {
      dateFormat: 'dd/mm/yyyy'
    }

    private model: Object = { date: {year: 2017, month: 5, day: 14}};

    ngOnInit(){
      this.propertyTypeOptions = [{ id: 1, name: 'Apartment'},
                                  {id: 2, name: 'House'},
                                   {id: 3, name: 'Lifestyle bare land'},
                                   {id: 4, name: 'Lifestyle dwelling'},
                                   {id: 5, name: 'Section'},
                                   {id: 6, name: 'Townhouse'},
                                   {id: 7, name: 'Unit'}]
    }

    
    
    
    }