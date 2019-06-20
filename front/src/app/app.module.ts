import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule} from './dashboard/dashboard.module';
import { AuthGuard} from './guards/auth-guard.service';
import { IngresoComponent } from './ingreso/ingreso.component';
import { VerComponent } from './ver/ver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { ModalComponent } from './modal/modal.component';
import { VerEvaluacionComponent } from './ver-evaluacion/ver-evaluacion.component';
import { FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IngresoAdminComponent } from './ingreso-admin/ingreso-admin.component';
import {HttpClientModule} from "@angular/common/http";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponenteComponent } from './usuario-componente/usuario-componente.component';
import { EncuestaComponenteComponent } from './encuesta-componente/encuesta-componente.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    IngresoComponent,
    VerComponent,
    PreguntaComponent,
    ModalComponent,
    VerEvaluacionComponent,
    EncuestasComponent,
  ],
  imports: [
    Ng2LoadingSpinnerModule.forRoot({}),
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(APP_ROUTES,{useHash: true}),
    DashboardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
