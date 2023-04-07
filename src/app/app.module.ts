import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { PatientsComponent } from './Components/Patients/patients/patients.component';
import { CreatePatientsComponent } from './Components/Patients/create-patients/create-patients.component';
import { EditDeletePatientsComponent } from './Components/Patients/edit-delete-patients/edit-delete-patients.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';

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
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
