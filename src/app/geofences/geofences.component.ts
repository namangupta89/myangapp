import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material";


export interface GeofencersList {
  id: number;
  name: string;
  description: string;
  
}


const ELEMENT_DATA: GeofencersList[] =[
  {
    "id": 1,
    "name": "Triangle",
    "description": "Triangular shape map"
  }, 
  {
    "id": 2,
    "name": "Rectangle",
    "description": "Rectangle shape map"
    
 },
  {
    "id": 3,
    "name": "Circle",
    "description": "Circle shape map"
 }
 ]


@Component({
  selector: 'app-geofences',
  templateUrl: './geofences.component.html',
  styleUrls: ['./geofences.component.scss']
})
export class GeofencesComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "description"
  ];


  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
