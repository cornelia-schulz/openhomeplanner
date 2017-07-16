import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from './search/search-box.component'
import { IMyDateModel } from "mydatepicker";

@Component({
  templateUrl: './results.component.html'

})
export class ResultsComponent {
  title = 'Open Home Planner - Results Page';

  selectedDate: any;

  onSearch(event: IMyDateModel) {
    this.selectedDate = event;
  }
}