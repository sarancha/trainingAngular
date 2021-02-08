import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { ProfileComponent } from './profile/profile.component';

const mat = [
  MatInputModule,
  MatInputModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  // declarations: [AppComponent, LoginComponent, RegisterComponent, ProfileComponent],
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    mat,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
