import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { AppComponent } from '../app.component';
export interface DriverList {
  id: number;
  firstName: string;
  lastName: string;
  uniqueid: string;
  attributes: string;
}

const ELEMENT_DATA: DriverList[] = [
  {
    id: 1,

    firstName: "Dan",
    lastName: "Jones",

    uniqueid: "DJ123",
    attributes: "ABC Transport"
  },
  {
    id: 2,

    firstName: "Bill",
    lastName: "Barner",

    uniqueid: "BB456",
    attributes: "DEF Transport"
  },
  {
    id: 3,

    firstName: "Joe",
    lastName: "Smoe",

    uniqueid: "JS456",
    attributes: "North America Transport"
  }
];

@Component({
  selector: "app-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.scss"]
})
export class DriverComponent implements OnInit {
  constructor(private appComponent : AppComponent) {}
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "uniqueid",
    "attributes"
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {

    this.appComponent.title="Fleet Management"

  }
}
