import { Component, Input, Output, EventEmitter, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';
import { Property } from './model';


@Component({
    moduleId: module.id,
    selector: 'display-result-box',
    inputs: ['selectedDate'],
    templateUrl: './display-result-box.component.html',
    styleUrls: ['display-result-box.component.css']
})

export class DisplayResultBoxComponent implements OnInit {
    properties: Property[];
    sortedProperties: Property[];
    title = "Open Homes scheduled for ";
    public selectedDate: any;

    get dateText(): string {
        if (this.selectedDate) {
            return this.selectedDate.day + '/' + this.selectedDate.month + '/' + this.selectedDate.year;
        }
        return "";
    }

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.getProperties();

    }

    getProperties() {
        this.dataService.getProperties().subscribe(props => {
            this.properties = props;
            this.properties.sort(function (a, b) {
                if (a.openHomeFromTime < b.openHomeFromTime) {
                    return -1;
                }
                else if (a.openHomeFromTime > b.openHomeFromTime) {
                    return 1;
                }
                else return 0;
            })
        }, (errorMsg: string) => {
            alert(errorMsg);
        });
    }

    removePropertyfromList() {

    }

}