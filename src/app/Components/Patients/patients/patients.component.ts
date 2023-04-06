import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patients } from 'src/app/Interfaces/Patients';
import { PatientsServicesService } from 'src/app/Services/patients-services.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  constructor(private router:Router,private patiens:PatientsServicesService){}

  patient:Patients[]=[];

  ngOnInit():void{
    this.patiens.getPatients().subscribe(data=>{
      this.patient = data
      console.log(data);
    })
  }


  editPatients(id:number){
    this.router.navigate(['editarEliminarPaciente', id])
  }


}