import { Component, OnInit } from '@angular/core';

export interface Sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  firstName: string = 'Naman';
  lastName: string = 'Gupta';


  sexs : Sex[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }

  ];

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('save data');
  }

}
