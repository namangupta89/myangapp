import { Component, OnInit, Injectable } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { AuthService } from '../auth.service';




@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  appTitle : string = 'Fleet Management ';

  loggedIn = false;

  otherNav = true;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    
    //this.loggedIn= this.authService.isLoggedIn ;
    console.log("this.loggedIn " + this.loggedIn);

    // if(this.loggedIn===false){
    //   this.otherNav=true;
    // }

  }

}
