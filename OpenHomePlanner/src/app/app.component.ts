import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <region-search-box></region-search-box>
    <rooms-price-search-box></rooms-price-search-box>
  `
  
})
export class AppComponent {
  title = 'Planner';
}