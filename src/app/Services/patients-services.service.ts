import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patients } from '../Interfaces/Patients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsServicesService {

  
  constructor(private http:HttpClient) { }

  url:string="https://localhost:7295/api"

  //GetPatientsñ
  getPatients():Observable<Patients[]>{
    let direccion = this.url + "/Patients";
    return this.http.get<Patients[]>(direccion);
  }

  //CreatePatients
  createPatients(persona: Patients) {
    return this.http.post(`${this.url}/Patients`, persona);
  }

  // createPatients(patient:Patients):Observable<Patients>{
  //   let direccion = this.url + "Patients";
  //   return this.http.post<Patients>(direccion,patient);
  // }

  //UpdatePatients

  updatePatients(patient:Patients):Observable<Patients>{
    let direccion = this.url + "/Patients/";
    return this.http.put<Patients>(direccion,patient);
  }
  //DeletePatients

  deletePatient(patient:Patients, id:any):Observable<Patients>{
    let direccion = this.url + "/Patients/" + id
    return this.http.delete<Patients>(direccion);
  }

  //Get a single Patient

  getSinglePatients(id:any):Observable<Patients>{
    let direccion = this.url + "/Patients/" + id;
    return this.http.get<Patients>(direccion);
  }
}
