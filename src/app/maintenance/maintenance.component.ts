import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";


export interface MaintenanceList {
  id: number;
  name: string;
  type: string;
  start: string;
  period: string;
}

const ELEMENT_DATA: MaintenanceList[] = [
  {
    id: 1,
    name: "Device1",
    type: "maintenance dtail1",
    start: "2019-02-14",
    period: "15 days"
  },
  {
    id: 2,
    name: "Device2",
    type: "maintenance dtail2",
    start: "2019-02-14",
    period: "15 days"
  },
  {
    id: 3,
    name: "Device3",
    type: "maintenance dtail3",
    start: "2019-02-14",
    period: "15 days"
  }
];

@Component({
  selector: "app-maintenance",
  templateUrl: "./maintenance.component.html",
  styleUrls: ["./maintenance.component.scss"]
})
export class MaintenanceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = [
    "id",
    "name",
    "type",
    "start",
    "period"
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
