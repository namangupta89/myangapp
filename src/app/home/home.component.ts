import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

users: Object;



  constructor(private dataService : DataService, private navComponent: NavComponent) { }

  isLoggedIn=false;
  
  ngOnInit() {

    
    console.log(this.navComponent.loggedIn)
    this.isLoggedIn= true;
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })

  }

  


}
