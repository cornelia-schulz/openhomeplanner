import { Component, OnInit } from '@angular/core';
import { Region } from './model';
import { District } from './model';
import { Suburb } from './model';
import { DataService } from './data.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts }  from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  moduleId: module.id,
  selector: 'region-search-box',
  templateUrl: './region-search-box.component.html',
  styleUrls: ['region-search-box.component.css']
})

export class RegionSearchBoxComponent implements OnInit{
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
    


  constructor(private dataService: DataService) {}

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



ngOnInit(){
  this.getRegions();
  this.suburbOptions = [];
  this.districtsDisabled = true;
  this.suburbsDisabled = true;
}

getRegions(){
  this.dataService.getRegions().subscribe(regs => {
    this.regions = regs;
  }, (errorMsg: string) => {
    alert(errorMsg);
  });
}

getDistricts(event:Event):void{
  this.region = this.selectedRegion;
  this.districts = this.region.district;
  this.districtsDisabled = false;
}

getSuburbs(event:Event):void{
  this.district = this.selectedDistrict;
  this.suburbs = this.district.suburb;
  console.log(this.suburbs[0].name);

  for(var i = 0; i < this.suburbs.length; i++){
    this.suburbOptions.push({id: i, name: this.suburbs[i].name})
  }
  console.log(this.suburbOptions[0])
  this.suburbsDisabled = false;
}

getSelectedSuburbs(){
  console.log("selected suburbs: " + this.selectedSuburbs);
  for(var i = 0; i < this.selectedSuburbs.length; i++){
    //
  }
}


}