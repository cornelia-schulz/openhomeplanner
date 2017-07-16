import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from './search/search-box.component'
import { IMyDateModel } from "mydatepicker";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Open Home Planner - Home Page';

  selectedDate: any;

  onSearch(event: IMyDateModel) {
    this.selectedDate = event;
  }
}