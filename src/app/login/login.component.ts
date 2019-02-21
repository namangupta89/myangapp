import { Component, OnInit, HostBinding } from "@angular/core";
import { NavComponent } from "../nav/nav.component";

// import { AuthProviders,AngularFire, AuthMethods } from "@angular/fire";

import { Router } from "@angular/router";
import { moveIn } from "../router.animations";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "../auth.service";
import { AppComponent } from '../app.component';
//import { auth } from 'firebase';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [moveIn()],
  host: { "[@moveIn]": "" }
})
export class LoginComponent implements OnInit {
  name: string;
  error: any;
  loginUserData = {};

  constructor(private _auth: AuthService, private navComponent:NavComponent, private route: Router, private authService: AuthService, private appComponent: AppComponent) {}

  // loginFb() {
  //   this.af.auth
  //     .login({
  //       provider: AuthProviders.Facebook,
  //       method: AuthMethods.Popup
  //     })
  //     .then(success => {
  //       this.router.navigate(["/members"]);
  //     })
  //     .catch(err => {
  //       this.error = err;
  //     });
  // }

  email: string;
  password: string;

  ngOnInit() {
    this.appComponent.title="Fleet Management "
  }

  loginUser() {

    console.log(this.email);
    console.log(this.password);

    this.navComponent.loggedIn=false;
    this.navComponent.otherNav=true;
    console.log(this.navComponent.loggedIn)
    this.navComponent.appTitle="Madharchod";

    this.navComponent.loggedIn= this.authService.isLoggedIn;
    console.log("this.navComponent.loggedIn" + this.navComponent.loggedIn)
console.log(this.appComponent.title="Fleet Management")

    if(this.email==="abc@gmail.com" && this.password==="password"){
      console.log("logged in successfully");
      this.route.navigate(['home']);
    }



    // this.nav.otherNav=true;
    // this._auth.loginUser(this.loginUserData).subscribe(
    //   res => {
    //     localStorage.setItem("token", res.token);
    //     //this._router.navigate(["/special"]);
    //   },
    //   err => console.log(err)
    // );
  }
}
