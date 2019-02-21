import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

export interface UserList {
  id: number;
  userid: string;
  firstName: string;
  lastName: string;
  email: string;
  admin: string;
  disabled: string;
  password: string;
}

const ELEMENT_DATA: UserList[] = [
  {
    id: 1,
    userid: "ganesh",
    firstName: "Joe",
    lastName: "Smoe",
    email: "abc@gmail.com",
    admin: "admin",
    disabled: "yes",
    password: "password"
  },
  {
    id: 2,
    userid: "vitahal",
    firstName: "Dan",
    lastName: "Jones",
    email: "def@gmail.com",
    admin: "admin",
    disabled: "yes",
    password: "password"
  },
  {
    id: 3,
    userid: "manoj",
    firstName: "Bill",
    lastName: "Barner",
    email: "gef@gmail.com",
    admin: "admin",
    disabled: "yes",
    password: "password"
  }
];

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = [
    "id",
    "userid",
    "firstname",
    "lastname",
    "email",
    "admin",
    "disabled",
    "password"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
