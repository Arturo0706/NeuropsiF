import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private auth:AuthService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  checkLocalStorage() {
    return localStorage.getItem('token')
  }

  
  onLogin(){
    if(this.loginForm.valid){
      this.auth.loginAPI(this.loginForm.value)
      .subscribe({
        next: (res) =>{
          console.log(res.token);
          this.auth.storeToken(res.token)
          localStorage.setItem("token", res.token);
          this.route.navigate(['pacientes']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Inicio de sesión correcto ¡Bienvenido!',
            showConfirmButton: false,
            timer: 1500,
          })
        },
      })
      Swal.fire({
        icon: 'error',
        title: '¡Credenciales incorrectas!',
        text: 'Usuario ó contraseña incorrecto. Favor de verificar',
      })
    }else{
      
      this.validateAllFormsFileds(this.loginForm);
     Swal.fire({
        icon: 'error',
        title: '¡Error de formulario!',
        text: 'Al parecer aún no has llenado los campos',
      })
    }
  }


  

  ocultarContrasena() {
    this.isText = !this.isText;
    // Revisar la condición para cambiar la contraseña
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = "text" : this.type = "password"
  }

  private validateAllFormsFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsDirty({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAllFormsFileds(control)
      }
    })

  }
}
