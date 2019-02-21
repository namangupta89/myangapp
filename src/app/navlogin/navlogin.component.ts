import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.scss']
})
export class NavloginComponent implements OnInit {

  appTitle: string="Fleet Management";
  constructor() { }

  ngOnInit() {
  }

}
