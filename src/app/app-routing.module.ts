import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { RegisterComponent } from "./register/register.component";
import { NavComponent } from './nav/nav.component';
// import { MembersComponent } from './members/members.component';
// import { AuthGuard } from "./auth.service";
// import { SignupComponent } from "./signup/signup.component";
// import { EmailComponent } from "./email/email.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "", component: LoginComponent },
  { path: "userslist", component: UsersComponent },
  { path: "maintenancelist", component: MaintenanceComponent },
  { path: "login", component: LoginComponent },
   { path: "register", component: RegisterComponent },
   {path: "logout", component : LoginComponent}
   // { path: "nav", component: NavComponent },
  // { path: "login-email", component: EmailComponent },
  // { path: "members", component: MembersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
