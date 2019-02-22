import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavComponent } from '../nav/nav.component';
import { MouseEvent } from '@agm/core';
import * as CanvasJS from 'canvasjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

users: Object;



  constructor(private dataService : DataService, private navComponent: NavComponent) { }

  isLoggedIn=false;
  
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;



  ngOnInit() {

    
    console.log(this.navComponent.loggedIn)
    this.isLoggedIn= true;
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })

  }

  



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  //markers: Mapservic
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'V1',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'V2',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'v3',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
