import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';
import { Property } from './model';
import { PropertyTypeSearchBoxComponent } from './property-type-search-box.component';


@Component({
  moduleId: module.id,
  selector: 'display-result-box',
  templateUrl: './display-result-box.component.html',
  styleUrls: ['display-result-box.component.css']
})

export class DisplayResultBoxComponent implements OnInit{
    properties: Property[];
    sortedProperties: Property[];
    title = "Open Homes scheduled for your chosen date";
    selectedDate: any;
    
    
    constructor(private dataService: DataService) {}
    ngOnInit(){
        this.getProperties();
        
    }

    getProperties() {
        this.dataService.getProperties().subscribe(props => {
            this.properties = props;
            this.properties.sort(function(a,b){
                if(a.openHomeFromTime < b.openHomeFromTime){
                    return -1;
                }
                else if(a.openHomeFromTime > b.openHomeFromTime){
                    return 1;
                }
                else return 0;
            })
        }, (errorMsg: string) => {
            alert(errorMsg);
        });
    }

    getSelectedDate() {

    }

    removePropertyfromList(){

    }

}