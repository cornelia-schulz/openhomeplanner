import { Component, OnInit } from '@angular/core';
import { PropertyTypeSearchBoxComponent } from './search/property-type-search-box.component'
import { IMyDateModel } from "mydatepicker";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'Open Home Planner';

  selectedDate: any;

  onSearch(event: IMyDateModel) {
    this.selectedDate = event;
  }


}