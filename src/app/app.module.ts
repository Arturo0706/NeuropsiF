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
import { CodiCarasComponent } from './Components/codi-caras/codi-caras.component';
import { RetencionDigitosProgresionComponent } from './Components/retencion-digitos-progresion/retencion-digitos-progresion.component';
import { DeteccionvisualComponent } from './Components/deteccionvisual/deteccionvisual.component';
import { DibujossecuencialesComponent } from './Components/dibujossecuenciales/dibujossecuenciales.component';
import { EvocacionComponent } from './Components/evocacion/evocacion.component';
import { Evocacion2Component } from './Components/evocacion2/evocacion2.component';
import { FluideznoverbalComponent } from './Components/fluideznoverbal/fluideznoverbal.component';
import { FormacionCategoriasComponent } from './Components/formacion-categorias/formacion-categorias.component';
import { MemoriaVerbalEspontaneaComponent } from './Components/Formulario-9/memoria-verbal-espontanea/memoria-verbal-espontanea';
import { MemoriaVerbalPorClavesComponent } from './Components/Formulario-9/memoria-verbal-por-claves/memoria-verbal-por-claves.component';
import { MemoriaVerbalPorReconocimientoComponent } from './Components/Formulario-9/memoria-verbal-por-reconocimiento/memoria-verbal-por-reconocimiento.component';
import { FormularioComponent } from './Components/formulario-modulo6/formulario.component';
import { HistoriaClinica1Component } from './Components/historia-clinica1/historia-clinica1.component';
import { HistoriaClinica2Component } from './Components/historia-clinica2/historia-clinica2.component';
import { OrientacionComponent } from './Components/orientacion/orientacion.component';
import { ParesAsociadosComponent } from './Components/pares-asociados2/pares-asociados.component';
import { ParesasociadosComponent } from './Components/paresasociados/paresasociados.component';
import { ProcesoVisoEspacialComponent } from './Components/proceso-viso-espacial/proceso-viso-espacial.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { SeriesSucesivasComponent } from './Components/series-sucesivas/series-sucesivas.component';
import { MeCarasComponent } from './Components/me-caras/me-caras.component';
import { MiComponente } from './Components/Fluidez_verbal/inputs/inputs.component';
import { AppfluidezComponent } from './Components/Fluidez_verbal/fluidex.component';
import { ResultadoComponent } from './Components/Fluidez_verbal/resultado/resultado.component';
import { DetecciondigitosComponent } from './Components/detecciondigitos/detecciondigitos.component';
import { FuncionesComponent } from './Components/funciones/funciones.component';
import { FuncionesReacComponent } from './Components/funciones-reac/funciones-reac.component';
import { FuncionesMotorasComponent } from './Components/funciones-motoras/funciones-motoras.component';
import { flComponent } from './Components/funciones-motoras/resultado/resultado.component';
import { apptotal } from './Components/funciones-motoras/total/total.component';
import { CambiomanoComponent } from './Components/cambiomano/cambiomano.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    CreatePatientsComponent,
    EditDeletePatientsComponent,
    CodiCarasComponent,
    DeteccionvisualComponent,
    DibujossecuencialesComponent,
    EvocacionComponent, 
    Evocacion2Component,
    FluideznoverbalComponent,
    FormacionCategoriasComponent,
    MemoriaVerbalEspontaneaComponent,
    MemoriaVerbalPorClavesComponent,
    MemoriaVerbalPorReconocimientoComponent,
    FormularioComponent,
    HistoriaClinica1Component,
    HistoriaClinica2Component,
    OrientacionComponent,
    ParesAsociadosComponent,
    ParesasociadosComponent,
    ProcesoVisoEspacialComponent,
    PruebaComponent,
    RetencionDigitosProgresionComponent,
    SeriesSucesivasComponent,
    MeCarasComponent,
    MiComponente, 
    AppfluidezComponent,
    ResultadoComponent,
    DetecciondigitosComponent,
    FuncionesComponent,
    FuncionesReacComponent,
    FuncionesMotorasComponent,
    flComponent,
    apptotal,
    CambiomanoComponent

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
