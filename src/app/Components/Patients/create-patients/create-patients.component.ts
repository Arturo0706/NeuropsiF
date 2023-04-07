import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patients } from 'src/app/Interfaces/Patients';
import { PatientsServicesService } from 'src/app/Services/patients-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent {
  
  patientsForm!:FormGroup;

  constructor(private fb:FormBuilder, private api:PatientsServicesService, private router:Router){}

  patient:Patients[]=[];

  

  ngOnInit():void{
    this.patientsForm = this.fb.group({
      nameP:['',Validators.required],
      evaluationDate:['',Validators.required],
      birth:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      schoolGrade:['',Validators.required],
      laterality:['',Validators.required],
      motherSchooling:['',Validators.required],
      fatherSchooling:['',Validators.required],
      profiles_Id:['',Validators.required],
    })
    // this.api.getPatients().subscribe(data=>{
    //   this.patient = data
    //   console.log(data);
    // })


  }

  

  OnCreatePatiens(){
    if(this.patientsForm.valid){
      // console.log(this.patientsForm.value);
      this.api.createPatients(this.patientsForm.value).subscribe({
        next: (res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          // this.patientsForm.reset();
          this.router.navigate(['pacientes']);
        }),
        error:(err)=>{
          alert(err.error.message)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Parece que hubo un error',
              footer: 'Inténtalo de nuevo'
            })
        }
      })
    }
    else{
      this.validateAll(this.patientsForm);
      console.log("Error de formulario");
    }


    
  }

  private validateAll(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsDirty({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAll(control)
      }
    })
  }
  
}
