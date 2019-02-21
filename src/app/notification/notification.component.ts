import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material";


export interface NotificationList {
  id: number;
  type: string;
  deviceid: string;
  alarm: string;
  channels: string;
  
}


const ELEMENT_DATA: NotificationList[]=

[
  {
    "id": 1,
    "type": "notification1",
    "deviceid": "dev456",
    "alarm": "alarm1",
    "channels": "sms"
  }, 
  {
    "id": 2,
    "type": "notification2",
    "deviceid": "dev436",
    "alarm": "alarm2",
    "channels": "email"
 },
  {
    "id": 3,
    "type": "notification3",
    "deviceid": "dev437",
    "alarm": "alarm3",
    "channels": "phone"
 }
 ]

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = [
    "id",
    "type",
    "deviceid",
    "alarm",
    "channel"
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
