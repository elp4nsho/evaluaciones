import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from '../guards/auth-guard.service';
import {IngresoComponent} from '../ingreso/ingreso.component';
import {VerComponent} from '../ver/ver.component';
import {VerAdminComponent} from '../ver-admin/ver-admin.component';
import {IngresoAdminComponent} from '../ingreso-admin/ingreso-admin.component';
import {RoleGuard} from '../guards/role-guard.service';
import {UsuariosComponent} from "../usuarios/usuarios.component";
import {EncuestasComponent} from "../encuestas/encuestas.component";


export const dashboardRoutes: Routes = [
  {
    path: 'evaluaciones',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'ingreso', pathMatch: 'full'},
      {path: 'ingreso', component: IngresoComponent},
      {path: 'ver', component: VerComponent},
      {
        path: 'administracion/ver', component: VerAdminComponent,
        data: {tipoUsuario: 0},
        canActivate: [RoleGuard]
      }, {
        path: 'administracion/usuarios', component: UsuariosComponent,
        data: {tipoUsuario: 0},
        canActivate: [RoleGuard]
      },
      {
        path: 'administracion/encuestas', component: EncuestasComponent,
        data: {tipoUsuario: 0},
        canActivate: [RoleGuard]
      },
      {
        path: 'administracion/ingreso', component: IngresoAdminComponent,
        data: {tipoUsuario: 0},
        canActivate: [RoleGuard]
      }
    ]


  }
];
