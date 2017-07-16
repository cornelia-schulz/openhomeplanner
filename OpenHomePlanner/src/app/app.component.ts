import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from './search/search-box.component'
import { IMyDateModel } from "mydatepicker";
import { SearchCriteria, Region } from './search/model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'Open Home Planner';
  searchCriteria: SearchCriteria;
  selectedDate: any;
  searchResultsAvailable = false;
  regions: Region[];

  onSearch(event: SearchCriteria) {
    this.searchCriteria = event;
    this.searchResultsAvailable = true;
    this.selectedDate = event.openHomeDate;
  }

  getRegions(event:Region[]){
    this.regions = event;
  }


}