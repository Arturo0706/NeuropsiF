import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './Components/Patients/patients/patients.component';
import { CreatePatientsComponent } from './Components/Patients/create-patients/create-patients.component';
import { EditDeletePatientsComponent } from './Components/Patients/edit-delete-patients/edit-delete-patients.component';
import { AuthGuard } from './guards/auth.guard';
import { HistoriaClinica1Component } from './Components/historia-clinica1/historia-clinica1.component';
import { HistoriaClinica2Component } from './Components/historia-clinica2/historia-clinica2.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { RetencionDigitosProgresionComponent } from './Components/retencion-digitos-progresion/retencion-digitos-progresion.component';
import { ProcesoVisoEspacialComponent } from './Components/proceso-viso-espacial/proceso-viso-espacial.component';
import { FormacionCategoriasComponent } from './Components/formacion-categorias/formacion-categorias.component';
import { OrientacionComponent } from './Components/orientacion/orientacion.component';
import { CodiCarasComponent } from './Components/codi-caras/codi-caras.component';
import { DibujossecuencialesComponent } from './Components/dibujossecuenciales/dibujossecuenciales.component';
import { DeteccionvisualComponent } from './Components/deteccionvisual/deteccionvisual.component';
import { FluideznoverbalComponent } from './Components/fluideznoverbal/fluideznoverbal.component';
import { MemoriaVerbalEspontaneaComponent } from './Components/Formulario-9/memoria-verbal-espontanea/memoria-verbal-espontanea';
import { MemoriaVerbalPorClavesComponent } from './Components/Formulario-9/memoria-verbal-por-claves/memoria-verbal-por-claves.component';
import { MemoriaVerbalPorReconocimientoComponent } from './Components/Formulario-9/memoria-verbal-por-reconocimiento/memoria-verbal-por-reconocimiento.component';
import { FormularioComponent } from './Components/formulario-modulo6/formulario.component';
import { ParesasociadosComponent } from './Components/paresasociados/paresasociados.component';
import { SeriesSucesivasComponent } from './Components/series-sucesivas/series-sucesivas.component';
import { EvocacionComponent } from './Components/evocacion/evocacion.component';
import { Evocacion2Component } from './Components/evocacion2/evocacion2.component';
import { ParesAsociadosComponent } from './Components/pares-asociados2/pares-asociados.component';
import { MeCarasComponent } from './Components/me-caras/me-caras.component';
import { ResultadoComponent } from './Components/Fluidez_verbal/resultado/resultado.component';
import { DetecciondigitosComponent } from './Components/detecciondigitos/detecciondigitos.component';
import { FuncionesComponent } from './Components/funciones/funciones.component';
import { FuncionesReacComponent } from './Components/funciones-reac/funciones-reac.component';
import { FuncionesMotorasComponent } from './Components/funciones-motoras/funciones-motoras.component';
import { flComponent } from './Components/funciones-motoras/resultado/resultado.component';
import { CambiomanoComponent } from './Components/cambiomano/cambiomano.component';



const ROUTES:Routes =[
  { path: '', component: LoginComponent, pathMatch:'full'},
  {path:'pacientes', component:PatientsComponent, canActivate:[AuthGuard]},
  {path:'nuevoPaciente', component:CreatePatientsComponent,canActivate:[AuthGuard]},
  {path:'editarEliminarPaciente/:id', component:EditDeletePatientsComponent,canActivate:[AuthGuard]},
  { path: 'historiaClinica1', component: HistoriaClinica1Component },
  { path: 'historiaClinica2', component: HistoriaClinica2Component },
  { path: 'rdr', component: PruebaComponent },
  { path: 'rdp', component: RetencionDigitosProgresionComponent },
  { path: 'procesoViso', component: ProcesoVisoEspacialComponent },
  { path: 'formCategorias', component: FormacionCategoriasComponent },//falta que gael lo termine
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'codificacionCaras', component: CodiCarasComponent },
  { path: 'dibujos', component: DibujossecuencialesComponent },
  { path: 'deteccionvisual', component: DeteccionvisualComponent },
  { path: 'fluideznoverbal', component: FluideznoverbalComponent },
  { path: 'memoriaespontanea', component: MemoriaVerbalEspontaneaComponent },
  { path: 'memoriaclave', component: MemoriaVerbalPorClavesComponent },
  { path: 'memoriareconocimiento', component: MemoriaVerbalPorReconocimientoComponent },
  { path: 'memorialogica', component: FormularioComponent },
  { path: 'paresasociados', component: ParesasociadosComponent },
  { path: 'seriessucesivas', component: SeriesSucesivasComponent },
  { path: 'evocacion', component: EvocacionComponent },
  { path: 'evocacion2', component: Evocacion2Component },
  {path:'pacientes', component:PatientsComponent},
  {path:'nuevoPaciente', component:CreatePatientsComponent},
  {path:'editarEliminarPaciente/:id', component:EditDeletePatientsComponent},
  {path:'paresasociados2', component:ParesAsociadosComponent},
  {path:'cubosenprogresion', component:RetencionDigitosProgresionComponent},
  {path:'cubosenenregresion', component:RetencionDigitosProgresionComponent},
  {path:'mecaras', component:MeCarasComponent},
  {path:'fluidezverbalRes', component:ResultadoComponent},
  {path:'detecciondigitos', component:DetecciondigitosComponent},
  {path:'funciones', component:FuncionesComponent},
  {path:'funcionesreact', component:FuncionesReacComponent},
  {path:'funcionesmotoras', component:FuncionesMotorasComponent},
  {path:'funcioncambio', component:CambiomanoComponent},

  
  
  

  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
