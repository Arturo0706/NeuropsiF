import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from 'src/app/Interfaces/Patients';
import Swal from 'sweetalert2';
import { PatientsServicesService } from '../../../Services/patients-services.service';

@Component({
  selector: 'app-edit-delete-patients',
  templateUrl: './edit-delete-patients.component.html',
  styleUrls: ['./edit-delete-patients.component.css']
})
export class EditDeletePatientsComponent {

  constructor(private activerouter: ActivatedRoute, private api:PatientsServicesService, private router:Router){}

  datosPacientes!:Patients;

  editarPacientesForm = new FormGroup({
    nameP: new FormControl(''),
    evaluationDate: new FormControl(''),
    birth: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    schoolGrade: new FormControl(''),
    laterality: new FormControl(''),
    motherSchooling: new FormControl(''),
    fatherSchooling: new FormControl(''),
    profiles_Id: new FormControl(''),
    id:new FormControl(''),
  })
  ngOnInit():void{
    let pacienteId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSinglePatients(pacienteId).subscribe((data)=>{
      this.datosPacientes = data
      this.editarPacientesForm.setValue({
       
        'nameP':this.datosPacientes.nameP,
        'evaluationDate':this.datosPacientes.evaluationDate?.toString()|| '',
        'birth':this.datosPacientes.birth?.toString()|| '',
        'age':this.datosPacientes.age?.toString()|| '',
        'gender':this.datosPacientes.gender,
        'schoolGrade':this.datosPacientes.schoolGrade,
        'laterality':this.datosPacientes.laterality,
        'motherSchooling':this.datosPacientes.motherSchooling,
        'fatherSchooling':this.datosPacientes.fatherSchooling,
        'profiles_Id':this.datosPacientes.profiles_Id?.toString() || '',
        'id': this.datosPacientes.id?.toString() || ''
        // 'available':this.datosPacientes.available.valueOf()
      });
    })
  
  }

  postForm(form:Patients | any){
    let patientId = this.activerouter.snapshot.paramMap.get('id');
    this.api.updatePatients(form).subscribe(data=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Paciente actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['pacientes']);
    })
  }
  
  preConfirmToDelete(){
    Swal.fire({
      title: '¿Está seguro de eliminar este registro?',
      text: "No podrá revertir el proceso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUsers();
        Swal.fire(
          '¡Eliminado con éxito!',
          'El registro ha sido eliminado',
          'success'
        )
        this.router.navigate(['pacientes'])
      }
    })
  }

  deleteUsers() {
    let patiendId = this.activerouter.snapshot.paramMap.get('id');
    let datos: Patients | any = this.editarPacientesForm.value
    this.api.deletePatient(datos, patiendId).subscribe(data => {
      console.log(data);
    })

  }
}
