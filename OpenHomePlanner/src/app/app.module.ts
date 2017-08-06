import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ResultsComponent } from './results.component';
import { SearchBoxComponent } from './search/search-box.component';
import { DisplayResultBoxComponent } from './search/display-result-box.component';
import { DataService } from './search/data.service';
import { routing } from './app.routes';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './search/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HomeComponent,
    ResultsComponent,
    DisplayResultBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectDropdownModule,
    MyDatePickerModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
