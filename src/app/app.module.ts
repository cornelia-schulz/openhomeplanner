import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownMultiselectModule } from 'ng2-dropdown-multiselect';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { RegionSearchBoxComponent } from './region-search-box-component';
import { DataService } from './data.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegionSearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownMultiselectModule,
    MultiselectDropdownModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
