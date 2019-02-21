import { Component, OnInit } from "@angular/core";

import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  email: string;
  password: string;
  appTitle ="Register";

  constructor(private _auth : AuthService) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
       //this._router.navigate(["/special"]);
      },
      err => console.log(err)
    );
  }
}
