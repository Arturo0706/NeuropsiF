import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { PatientsComponent } from './Components/Patients/patients/patients.component';
import { CreatePatientsComponent } from './Components/Patients/create-patients/create-patients.component';
import { EditDeletePatientsComponent } from './Components/Patients/edit-delete-patients/edit-delete-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    CreatePatientsComponent,
    EditDeletePatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
