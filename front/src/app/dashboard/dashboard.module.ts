import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from "../guards/auth-guard.service";
import { NavbarComponent} from '../navbar/navbar.component';
import { SidebarComponent} from '../sidebar/sidebar.component';
import{ VerAdminComponent} from '../ver-admin/ver-admin.component';
import  {IngresoAdminComponent} from '../ingreso-admin/ingreso-admin.component';
import {RoleGuard} from '../guards/role-guard.service';
import {UsuariosComponent} from "../usuarios/usuarios.component";
import {UsuarioComponenteComponent} from "../usuario-componente/usuario-componente.component";
import {EncuestaComponenteComponent} from "../encuesta-componente/encuesta-componente.component";

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [VerAdminComponent,
    IngresoAdminComponent,LayoutComponent,EncuestaComponenteComponent,NavbarComponent,SidebarComponent,UsuariosComponent,UsuarioComponenteComponent],
  providers:[AuthGuard,RoleGuard]
})
export class DashboardModule { }
