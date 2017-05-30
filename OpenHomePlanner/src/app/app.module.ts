import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { RegionSearchBoxComponent } from './region-search-box-component';
import { RoomsPriceSearchBoxComponent } from './rooms-price-search-box.component';
import { PropertyTypeSearchBoxComponent } from './property-type-search-box.component';
import { DisplayResultBoxComponent } from './display-result-box.component';
import { DataService } from './data.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegionSearchBoxComponent,
    RoomsPriceSearchBoxComponent,
    PropertyTypeSearchBoxComponent,
    DisplayResultBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectDropdownModule,
    MyDatePickerModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
