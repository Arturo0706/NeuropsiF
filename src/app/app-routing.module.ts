import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './Components/Patients/patients/patients.component';
import { CreatePatientsComponent } from './Components/Patients/create-patients/create-patients.component';
import { EditDeletePatientsComponent } from './Components/Patients/edit-delete-patients/edit-delete-patients.component';

const ROUTES:Routes =[

  { path: '', component: LoginComponent},
  {path:'pacientes', component:PatientsComponent},
  {path:'nuevoPaciente', component:CreatePatientsComponent},
  {path:'editarEliminarPaciente/:id', component:EditDeletePatientsComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
