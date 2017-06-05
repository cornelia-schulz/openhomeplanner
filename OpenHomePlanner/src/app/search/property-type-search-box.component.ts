import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { DataService } from './data.service';
import { IMyOptions } from 'mydatepicker';
import { IMyDateModel } from 'mydatepicker';
import { DisplayResultBoxComponent } from './display-result-box.component';


@Component({
    moduleId: module.id,
    selector: 'property-type-search-box',
    outputs: ['setDate'],
    templateUrl: './property-type-search-box.component.html',
    styleUrls: ['property-type-search-box.component.css']
})

export class PropertyTypeSearchBoxComponent implements OnInit {
    propertyTypeOptions: IMultiSelectOption[];
    selectedPropertyTypes: number[];
    today = new Date();
    currentYear = this.today.getFullYear();
    currentMonth = this.today.getMonth() + 1;
    currentDay = this.today.getDate();
    selectedDate: any;
    public setDate: EventEmitter<any> = new EventEmitter();


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

    private model: Object = { date: { year: this.currentYear, month: this.currentMonth, day: this.currentDay } };

    ngOnInit() {
        this.propertyTypeOptions = [{ id: 1, name: 'Apartment' },
        { id: 2, name: 'House' },
        { id: 3, name: 'Lifestyle bare land' },
        { id: 4, name: 'Lifestyle dwelling' },
        { id: 5, name: 'Section' },
        { id: 6, name: 'Townhouse' },
        { id: 7, name: 'Unit' }];
    }

    onDateChanged(event: IMyDateModel) {
        console.log(event.date);
        this.selectedDate = event.date;
        this.setDate.emit(this.selectedDate);
        return this.selectedDate;
    }



}