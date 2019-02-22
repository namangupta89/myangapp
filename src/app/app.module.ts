import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import {MatTableModule} from '@angular/material/table';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment} from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { NavloginComponent } from './navlogin/navlogin.component';
import { DriverComponent } from './driver/driver.component';
import { GeofencesComponent } from './geofences/geofences.component';
import { NotificationComponent } from './notification/notification.component';
// import { EmailComponent } from './email/email.component';
// import { SignupComponent } from './signup/signup.component';
// import { MembersComponent } from './members/members.component';
//import { AuthGuard } from './auth.service';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    MaintenanceComponent,
    RegisterComponent,
    NavloginComponent,
    DriverComponent,
    GeofencesComponent,
    NotificationComponent
    // EmailComponent,
    // SignupComponent,
    // MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,MatNativeDateModule,MatSelectModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCA53-03niYZQOy-RnNJr1rOcxLkDGSXyA'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
