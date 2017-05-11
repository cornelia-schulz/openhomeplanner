import { Component, OnInit } from '@angular/core';
import { Region } from './model';
import { District } from './model';
import { Suburb } from './model';
import { DataService } from './data.service';
import { IDropdownItem } from 'ng2-dropdown-multiselect';
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
    selectedSuburbs: IMultiSelectOption[];
    id: any;
    optionsModel: number[];
    suburbOptions: IMultiSelectOption[];
    


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
  this.suburbOptions = [
            
        ];
}

getRegions(){
  this.dataService.getRegions().subscribe(regs => {
    this.regions = regs;
    //console.log(this.regions);
  }, (errorMsg: string) => {
    alert(errorMsg);
  });
}

getDistricts(event:Event):void{
  this.region = this.selectedRegion;
  //console.log(this.region);
  this.districts = this.region.district;
}

getSuburbs(event:Event):void{
  this.district = this.selectedDistrict;
  this.suburbs = this.district.suburb;
  console.log(this.suburbs.length);
  console.log(this.suburbs[0].name);

  for(var i = 0; i < this.suburbs.length; i++){
    this.suburbOptions.push({id: i, name: this.suburbs[i].name})
  }
  console.log(this.suburbOptions[0])
  
}

getOptions(){
  console.log(this.optionsModel);
  console.log(this.selectedSuburbs)
}

}